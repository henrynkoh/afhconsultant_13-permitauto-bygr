/**
 * Generate textual/ASCII floor plan representation for permit (WABO letter-sized submission).
 */

import type { Property, Floor, Room } from "./types";

function roomLine(room: Room): string {
  const sq = room.sqFt ?? room.widthFt * room.depthFt;
  const parts = [`${room.label} ${room.widthFt}x${room.depthFt}`];
  if (room.type === "bedroom") {
    parts.push(`${sq} sq ft`);
    if (room.egressType) parts.push(`Type ${room.egressType}`);
    if (room.egressWindowSqFt != null) parts.push(`egress ${room.egressWindowSqFt} sq ft`);
  }
  if (room.type === "bathroom") {
    if (room.hasGrabBars) parts.push("grab bars");
    if (room.showerClear) parts.push("30x48 shower");
  }
  return `[${parts.join(", ")}]`;
}

export function floorPlanToText(property: Property): string {
  const lines: string[] = [];
  lines.push(`Property: ${property.address}, ${property.city}, ${property.state} ${property.zip}`);
  lines.push(`Total: ${property.totalSqFt} sq ft`);
  lines.push("");
  for (const floor of property.floors) {
    lines.push(`--- ${floor.name} ---`);
    for (const room of floor.rooms) {
      lines.push(`  ${roomLine(room)}`);
    }
    lines.push("");
  }
  lines.push("Mods: " + [
    property.hasEntryRamp && "Entry ramp (1:12)",
    property.minDoorWidthIn && property.minDoorWidthIn >= 32 && "32\" doors",
    property.alarmsEveryLevel && "Alarms every level",
    property.hasFireExtinguisher && "Fire extinguisher",
  ].filter(Boolean).join(", ") || "—");
  return lines.join("\n");
}
