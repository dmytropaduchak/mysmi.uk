export const SERVICES = [{
  name: "Car Key Replacement",
  slug: "car-key-replacement",
}, {
  name: "Car Unlocking",
  slug: "car-unlocking",
}, {
  name: "Spare Car Keys",
  slug: "spare-car-keys",
}, {
  name: "Ignition Barrel Replacement",
  slug: "ignition-barrel-replacement",
}, {
  name: "Car Key Programming",
  slug: "car-key-programming",
}, {
  name: "Car Key Repair",
  slug: "car-key-repair",
}];

export const services = new Map(SERVICES.map((i) => [i.slug, i]));