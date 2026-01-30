"use client";

import { useState } from "react";
import type { Property, Floor, Room, RoomType } from "@/lib/types";
import { floorPlanToText } from "@/lib/floorPlanText";
import { checkCompliance, complianceOverall } from "@/lib/compliance";
import Link from "next/link";

const ROOM_TYPES: RoomType[] = [
  "bedroom",
  "bathroom",
  "living",
  "kitchen",
  "hallway",
  "entry",
  "utility",
  "other",
];

const defaultProperty = (): Property => ({
  address: "",
  city: "Centralia",
  state: "WA",
  zip: "98531",
  totalSqFt: 0,
  floors: [
    {
      id: "f1",
      name: "Main Floor",
      rooms: [],
    },
  ],
});

export default function FloorPlanPage() {
  const [property, setProperty] = useState<Property>(defaultProperty);
  const [activeFloorId, setActiveFloorId] = useState<string>("f1");

  const addRoom = (floorId: string) => {
    const floor = property.floors.find((f) => f.id === floorId);
    if (!floor) return;
    const id = `r-${Date.now()}`;
    const newRoom: Room = {
      id,
      type: "bedroom",
      label: `Room ${floor.rooms.length + 1}`,
      widthFt: 12,
      depthFt: 10,
      egressType: "NS1",
      egressWindowSqFt: 5.7,
    };
    setProperty({
      ...property,
      floors: property.floors.map((f) =>
        f.id === floorId ? { ...f, rooms: [...f.rooms, newRoom] } : f
      ),
    });
  };

  const updateRoom = (
    floorId: string,
    roomId: string,
    patch: Partial<Room>
  ) => {
    setProperty({
      ...property,
      floors: property.floors.map((f) => {
        if (f.id !== floorId) return f;
        return {
          ...f,
          rooms: f.rooms.map((r) =>
            r.id === roomId ? { ...r, ...patch } : r
          ),
        };
      }),
    });
  };

  const removeRoom = (floorId: string, roomId: string) => {
    setProperty({
      ...property,
      floors: property.floors.map((f) => {
        if (f.id !== floorId) return f;
        return {
          ...f,
          rooms: f.rooms.filter((r) => r.id !== roomId),
        };
      }),
    });
  };

  const addFloor = () => {
    const id = `f-${Date.now()}`;
    setProperty({
      ...property,
      floors: [...property.floors, { id, name: "New Floor", rooms: [] }],
    });
    setActiveFloorId(id);
  };

  const activeFloor = property.floors.find((f) => f.id === activeFloorId);
  const textDiagram = floorPlanToText(property);
  const complianceItems = checkCompliance(property);
  const overallOk = complianceOverall(complianceItems);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Floor Plan Entry
        </h1>
        <p className="text-slate-600 max-w-2xl">
          Enter property and room dimensions. Workflow: floorplan → isometric
          → mixboard → notebooklm for city permit application (WABO, WAC,
          IRC).
        </p>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-800">
            Property &amp; Floors
          </h2>
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Address"
              value={property.address}
              onChange={(e) =>
                setProperty({ ...property, address: e.target.value })
              }
              className="flex-1 min-w-[200px] rounded border border-slate-300 px-3 py-2"
            />
            <input
              type="text"
              placeholder="City"
              value={property.city}
              onChange={(e) =>
                setProperty({ ...property, city: e.target.value })
              }
              className="w-28 rounded border border-slate-300 px-3 py-2"
            />
            <input
              type="text"
              placeholder="ZIP"
              value={property.zip}
              onChange={(e) =>
                setProperty({ ...property, zip: e.target.value })
              }
              className="w-24 rounded border border-slate-300 px-3 py-2"
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="text-slate-600">Total sq ft</label>
            <input
              type="number"
              min={0}
              value={property.totalSqFt || ""}
              onChange={(e) =>
                setProperty({
                  ...property,
                  totalSqFt: Number(e.target.value) || 0,
                })
              }
              className="w-28 rounded border border-slate-300 px-3 py-2"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={property.hasEntryRamp ?? false}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    hasEntryRamp: e.target.checked,
                  })
                }
              />
              Entry ramp (1:12)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={(property.minDoorWidthIn ?? 0) >= 32}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    minDoorWidthIn: e.target.checked ? 32 : 28,
                  })
                }
              />
              32&quot; doors
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={property.alarmsEveryLevel ?? false}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    alarmsEveryLevel: e.target.checked,
                  })
                }
              />
              Alarms every level
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={property.hasFireExtinguisher ?? false}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    hasFireExtinguisher: e.target.checked,
                  })
                }
              />
              Fire extinguisher
            </label>
          </div>
          <div className="flex gap-2 flex-wrap">
            {property.floors.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFloorId(f.id)}
                className={`px-3 py-1.5 rounded ${
                  activeFloorId === f.id
                    ? "bg-slate-800 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {f.name}
              </button>
            ))}
            <button
              onClick={addFloor}
              className="px-3 py-1.5 rounded border border-slate-300 text-slate-600"
            >
              + Floor
            </button>
          </div>
        </div>

        {activeFloor && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-800">
              Rooms — {activeFloor.name}
            </h2>
            {activeFloor.rooms.map((room) => (
              <div
                key={room.id}
                className="p-4 rounded-lg border border-slate-200 bg-white space-y-2"
              >
                <div className="flex justify-between items-start">
                  <input
                    type="text"
                    value={room.label}
                    onChange={(e) =>
                      updateRoom(activeFloorId, room.id, {
                        label: e.target.value,
                      })
                    }
                    className="font-medium rounded border border-slate-300 px-2 py-1 w-40"
                  />
                  <button
                    type="button"
                    onClick={() => removeRoom(activeFloorId, room.id)}
                    className="text-red-600 text-sm"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <select
                    value={room.type}
                    onChange={(e) =>
                      updateRoom(activeFloorId, room.id, {
                        type: e.target.value as RoomType,
                      })
                    }
                    className="rounded border border-slate-300 px-2 py-1"
                  >
                    {ROOM_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <label className="flex items-center gap-1">
                    W
                    <input
                      type="number"
                      min={1}
                      value={room.widthFt}
                      onChange={(e) =>
                        updateRoom(activeFloorId, room.id, {
                          widthFt: Number(e.target.value) || 1,
                        })
                      }
                      className="w-14 rounded border border-slate-300 px-2 py-1"
                    />
                    ft
                  </label>
                  <label className="flex items-center gap-1">
                    D
                    <input
                      type="number"
                      min={1}
                      value={room.depthFt}
                      onChange={(e) =>
                        updateRoom(activeFloorId, room.id, {
                          depthFt: Number(e.target.value) || 1,
                        })
                      }
                      className="w-14 rounded border border-slate-300 px-2 py-1"
                    />
                    ft
                  </label>
                </div>
                {room.type === "bedroom" && (
                  <div className="flex flex-wrap gap-4 pt-2 border-t border-slate-100">
                    <label className="flex items-center gap-1">
                      Egress type
                      <select
                        value={room.egressType ?? ""}
                        onChange={(e) =>
                          updateRoom(activeFloorId, room.id, {
                            egressType: (e.target.value || undefined) as
                              | "NS1"
                              | "NS2"
                              | "S",
                          })
                        }
                        className="rounded border border-slate-300 px-2 py-1"
                      >
                        <option value="">—</option>
                        <option value="NS1">NS1 (grade-level)</option>
                        <option value="NS2">NS2 (sprinklered)</option>
                        <option value="S">S (stairs)</option>
                      </select>
                    </label>
                    <label className="flex items-center gap-1">
                      Egress window (sq ft, min 5.7)
                      <input
                        type="number"
                        step={0.1}
                        min={0}
                        value={room.egressWindowSqFt ?? ""}
                        onChange={(e) =>
                          updateRoom(activeFloorId, room.id, {
                            egressWindowSqFt: Number(e.target.value) || undefined,
                          })
                        }
                        className="w-16 rounded border border-slate-300 px-2 py-1"
                      />
                    </label>
                  </div>
                )}
                {room.type === "bathroom" && (
                  <div className="flex gap-4 pt-2 border-t border-slate-100">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={room.hasGrabBars ?? false}
                        onChange={(e) =>
                          updateRoom(activeFloorId, room.id, {
                            hasGrabBars: e.target.checked,
                          })
                        }
                      />
                      Grab bars
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={room.showerClear ?? false}
                        onChange={(e) =>
                          updateRoom(activeFloorId, room.id, {
                            showerClear: e.target.checked,
                          })
                        }
                      />
                      30x48 shower
                    </label>
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => addRoom(activeFloorId)}
              className="px-4 py-2 rounded bg-slate-800 text-white"
            >
              + Add room
            </button>
          </div>
        )}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            Text / ASCII floor plan (permit-ready)
          </h2>
          <pre className="p-4 rounded-lg bg-slate-100 text-sm overflow-auto max-h-80 whitespace-pre-wrap font-mono">
            {textDiagram}
          </pre>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            Compliance snapshot
          </h2>
          <p
            className={`mb-2 font-medium ${
              overallOk ? "text-green-700" : "text-amber-700"
            }`}
          >
            {overallOk ? "All checks pass" : "Some items need attention"}
          </p>
          <ul className="space-y-1 text-sm">
            {complianceItems.slice(0, 8).map((i) => (
              <li
                key={i.id}
                className={i.met ? "text-slate-600" : "text-amber-700"}
              >
                {i.met ? "✓" : "○"} {i.code}: {i.title}
                {i.note && ` — ${i.note}`}
              </li>
            ))}
          </ul>
          <Link
            href="/compliance"
            className="mt-2 inline-block text-slate-600 underline"
          >
            Full compliance checklist →
          </Link>
        </div>
      </section>
    </div>
    </div>
  );
}
