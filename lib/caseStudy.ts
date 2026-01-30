/**
 * Case study: 2606 Cooks Hill Rd, Centralia 98531.
 * Current (single-family) vs future (WABO AFH) property data.
 */

import type { Property, Floor, Room } from "./types";

function mainFloorRoomsCurrent(): Room[] {
  return [
    {
      id: "r1",
      type: "entry",
      label: "Entry/Hall",
      widthFt: 5,
      depthFt: 20,
      egressWindowSqFt: 0,
    },
    {
      id: "r2",
      type: "living",
      label: "Living",
      widthFt: 20,
      depthFt: 15,
    },
    {
      id: "r3",
      type: "kitchen",
      label: "Kitchen",
      widthFt: 15,
      depthFt: 12,
    },
    {
      id: "r4",
      type: "bedroom",
      label: "Bed1",
      widthFt: 12,
      depthFt: 10,
      egressType: "NS1",
      egressWindowSqFt: 4,
    },
    {
      id: "r5",
      type: "bedroom",
      label: "Bed2",
      widthFt: 12,
      depthFt: 10,
      egressType: "NS1",
      egressWindowSqFt: 4,
    },
    {
      id: "r6",
      type: "bedroom",
      label: "Bed3",
      widthFt: 12,
      depthFt: 10,
      egressType: "NS1",
      egressWindowSqFt: 4,
    },
    {
      id: "r7",
      type: "bedroom",
      label: "Bed4",
      widthFt: 12,
      depthFt: 10,
      egressType: "NS1",
      egressWindowSqFt: 4,
    },
    {
      id: "r8",
      type: "bathroom",
      label: "Bath1",
      widthFt: 8,
      depthFt: 6,
      hasGrabBars: false,
      showerClear: false,
    },
    {
      id: "r9",
      type: "bathroom",
      label: "Bath2",
      widthFt: 8,
      depthFt: 6,
      hasGrabBars: false,
      showerClear: false,
    },
  ];
}

function mainFloorRoomsFuture(): Room[] {
  return [
    {
      id: "r1",
      type: "entry",
      label: "Entry/Hall",
      widthFt: 5,
      depthFt: 20,
      egressWindowSqFt: 0,
    },
    {
      id: "r2",
      type: "living",
      label: "Living",
      widthFt: 20,
      depthFt: 15,
    },
    {
      id: "r3",
      type: "kitchen",
      label: "Kitchen",
      widthFt: 15,
      depthFt: 12,
    },
    {
      id: "r4",
      type: "bedroom",
      label: "Bed1",
      widthFt: 12,
      depthFt: 10,
      egressType: "NS1",
      egressWindowSqFt: 5.7,
    },
    {
      id: "r5",
      type: "bedroom",
      label: "Bed2",
      widthFt: 12,
      depthFt: 10,
      egressType: "NS1",
      egressWindowSqFt: 5.7,
    },
    {
      id: "r6",
      type: "bedroom",
      label: "Bed3",
      widthFt: 12,
      depthFt: 10,
      egressType: "NS1",
      egressWindowSqFt: 5.7,
    },
    {
      id: "r7",
      type: "bedroom",
      label: "Bed4",
      widthFt: 12,
      depthFt: 10,
      egressType: "NS1",
      egressWindowSqFt: 5.7,
    },
    {
      id: "r8",
      type: "bathroom",
      label: "Bath1",
      widthFt: 8,
      depthFt: 6,
      hasGrabBars: true,
      showerClear: true,
    },
    {
      id: "r9",
      type: "bathroom",
      label: "Bath2",
      widthFt: 8,
      depthFt: 6,
      hasGrabBars: true,
      showerClear: true,
    },
  ];
}

function basementRoomsCurrent(): Room[] {
  return [
    {
      id: "b1",
      type: "other",
      label: "Rec Room",
      widthFt: 18,
      depthFt: 20,
    },
    {
      id: "b2",
      type: "bathroom",
      label: "Bath3",
      widthFt: 6,
      depthFt: 8,
      hasGrabBars: false,
      showerClear: false,
    },
  ];
}

function basementRoomsFuture(): Room[] {
  return [
    {
      id: "b1",
      type: "bedroom",
      label: "Bed5",
      widthFt: 10,
      depthFt: 10,
      egressType: "NS2",
      egressWindowSqFt: 5.7,
    },
    {
      id: "b2",
      type: "bedroom",
      label: "Bed6",
      widthFt: 10,
      depthFt: 10,
      egressType: "NS2",
      egressWindowSqFt: 5.7,
    },
    {
      id: "b3",
      type: "other",
      label: "Multi-use",
      widthFt: 8,
      depthFt: 20,
    },
    {
      id: "b4",
      type: "bathroom",
      label: "Bath3",
      widthFt: 6,
      depthFt: 8,
      hasGrabBars: true,
      showerClear: true,
    },
  ];
}

export function caseStudyProperty(): { current: Property; future: Property } {
  const current: Property = {
    address: "2606 Cooks Hill Rd",
    city: "Centralia",
    state: "WA",
    zip: "98531",
    totalSqFt: 2836,
    floors: [
      { id: "f1", name: "Main Floor", rooms: mainFloorRoomsCurrent() },
      { id: "f2", name: "Basement", rooms: basementRoomsCurrent() },
    ],
    hasEntryRamp: false,
    minDoorWidthIn: 28,
    alarmsEveryLevel: false,
    hasFireExtinguisher: false,
  };

  const future: Property = {
    address: "2606 Cooks Hill Rd",
    city: "Centralia",
    state: "WA",
    zip: "98531",
    totalSqFt: 2836,
    floors: [
      { id: "f1", name: "Main Floor", rooms: mainFloorRoomsFuture() },
      { id: "f2", name: "Basement", rooms: basementRoomsFuture() },
    ],
    hasEntryRamp: true,
    minDoorWidthIn: 32,
    alarmsEveryLevel: true,
    hasFireExtinguisher: true,
  };

  return { current, future };
}
