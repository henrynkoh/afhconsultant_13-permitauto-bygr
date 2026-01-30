/**
 * WAC / IRC / WABO compliance checks for AFH permit (local building inspector requirements).
 * References: WAC 388-76, IRC R330, WABO AFH Local Building Inspection Checklist.
 */

import type { Property, Room, ComplianceItem } from "./types";

const MIN_BEDROOM_SQFT_SINGLE = 70; // WAC 388-76-10685
const MIN_BEDROOM_SQFT_SHARED_PER_PERSON = 50;
const MIN_EGRESS_WINDOW_SQFT = 5.7; // IRC R310, WAC 388-76-10795
const MIN_DOOR_WIDTH_IN = 32; // IRC R330.4
const MIN_HALLWAY_WIDTH_IN = 36;

function sqFt(room: Room): number {
  return room.sqFt ?? room.widthFt * room.depthFt;
}

export function checkCompliance(property: Property): ComplianceItem[] {
  const items: ComplianceItem[] = [];
  let id = 0;
  const add = (
    code: string,
    title: string,
    requirement: string,
    met: boolean,
    note?: string
  ) => {
    items.push({ id: String(++id), code, title, requirement, met, note });
  };

  // Bedrooms: min 70 sq ft single (WAC 388-76-10685)
  for (const floor of property.floors) {
    for (const room of floor.rooms) {
      if (room.type === "bedroom") {
        const area = sqFt(room);
        add(
          "WAC 388-76-10685",
          "Bedroom minimum size",
          `Single bedroom ≥ ${MIN_BEDROOM_SQFT_SINGLE} sq ft`,
          area >= MIN_BEDROOM_SQFT_SINGLE,
          `${room.label}: ${area} sq ft`
        );
        const egress = room.egressWindowSqFt ?? 0;
        add(
          "IRC R310 / WAC 388-76-10795",
          "Egress window",
          `Escape opening ≥ ${MIN_EGRESS_WINDOW_SQFT} sq ft (24" H, 20" W, sill ≤44")`,
          egress >= MIN_EGRESS_WINDOW_SQFT,
          `${room.label}: ${egress} sq ft`
        );
        if (room.type === "bedroom" && room.egressType) {
          add(
            "IRC R330.3",
            "Sleeping room classification",
            "Type NS1 (grade-level), NS2 (sprinklered), or S (stairs) labeled on plan",
            ["NS1", "NS2", "S"].includes(room.egressType),
            `${room.label}: Type ${room.egressType}`
          );
        }
      }
      if (room.type === "bathroom") {
        add(
          "IRC R330.8",
          "Grab bars",
          "1¼–2\" diameter, 1½\" wall clearance, 250 lb strength",
          room.hasGrabBars === true,
          room.hasGrabBars ? `${room.label}: yes` : `${room.label}: add`
        );
        add(
          "IRC R330.8",
          "Shower clear space",
          "30\" x 48\" clear in shower",
          room.showerClear === true,
          room.label
        );
      }
    }
  }

  add(
    "IRC R330.9",
    "Entry ramp",
    "Ramp 1:12 slope, 36\" wide, handrails both sides for AFH accessibility",
    property.hasEntryRamp === true,
    property.hasEntryRamp ? "Present" : "Required for permit"
  );
  add(
    "IRC R330.4",
    "Door width",
    `Minimum clear width ${MIN_DOOR_WIDTH_IN}" (one-hand operable, ≤5 lb force)`,
    (property.minDoorWidthIn ?? 0) >= MIN_DOOR_WIDTH_IN,
    `Current: ${property.minDoorWidthIn ?? "—"}"`
  );
  add(
    "IRC R314 / R315 / R330.5",
    "Smoke/CO alarms",
    "Interconnected, audible on every level",
    property.alarmsEveryLevel === true,
    undefined
  );
  add(
    "IRC R330.5",
    "Fire extinguisher",
    "2A:10B:C rating, mounted 3.5–5 ft, one per floor",
    property.hasFireExtinguisher === true,
    undefined
  );

  return items;
}

export function complianceOverall(items: ComplianceItem[]): boolean {
  return items.every((i) => i.met);
}
