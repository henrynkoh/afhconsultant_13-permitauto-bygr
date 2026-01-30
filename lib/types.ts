/**
 * Floor plan and AFH permit data types (WAC/IRC/WABO).
 */

export type RoomType =
  | "bedroom"
  | "bathroom"
  | "living"
  | "kitchen"
  | "hallway"
  | "entry"
  | "utility"
  | "other";

export type EgressType = "NS1" | "NS2" | "S";

export interface Room {
  id: string;
  type: RoomType;
  label: string;
  widthFt: number;
  depthFt: number;
  /** sq ft (optional override; otherwise width * depth) */
  sqFt?: number;
  /** Egress: NS1 grade-level, NS2 sprinklered, S stairs */
  egressType?: EgressType;
  /** Egress window area sq ft (min 5.7 per IRC R310) */
  egressWindowSqFt?: number;
  /** Grab bars required (bathrooms) */
  hasGrabBars?: boolean;
  /** 30x48 shower clear */
  showerClear?: boolean;
}

export interface Floor {
  id: string;
  name: string;
  rooms: Room[];
}

export interface Property {
  address: string;
  city: string;
  state: string;
  zip: string;
  totalSqFt: number;
  floors: Floor[];
  /** Entry ramp (1:12 slope) */
  hasEntryRamp?: boolean;
  /** Door width inches (min 32 per IRC R330.4) */
  minDoorWidthIn?: number;
  /** Smoke/CO alarms every level */
  alarmsEveryLevel?: boolean;
  /** Fire extinguisher 2A:10B:C */
  hasFireExtinguisher?: boolean;
}

export interface ComplianceItem {
  id: string;
  code: string;
  title: string;
  requirement: string;
  met: boolean;
  note?: string;
}

export interface ComplianceResult {
  items: ComplianceItem[];
  overallOk: boolean;
}
