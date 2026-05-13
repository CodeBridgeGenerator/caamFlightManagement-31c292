const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("caamFlightManagementSampleD service", async () => {
  let thisService;
  let caamFlightManagementSampleDCreated;
  let usersServiceResults;
  let users;

  

  beforeEach(async () => {
    thisService = await app.service("caamFlightManagementSampleD");

    // Create users here
    usersServiceResults = await app.service("users").Model.create(usersRefData);
    users = {
      createdBy: usersServiceResults[0]._id,
      updatedBy: usersServiceResults[0]._id,
    };
  });

  after(async () => {
    if (usersServiceResults) {
      await Promise.all(
        usersServiceResults.map((i) =>
          app.service("users").Model.findByIdAndDelete(i._id)
        )
      );
    }
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (caamFlightManagementSampleD)");
  });

  describe("#create", () => {
    const options = {"flightNumber":"new value","callsign":"new value","aircraftType":"new value","departure":"new value","destination":"new value","eobtUtc":23,"route":"new value","cruisingAltitude":"new value","fuelOnBoardKg":23,"status":"new value"};

    beforeEach(async () => {
      caamFlightManagementSampleDCreated = await thisService.Model.create({...options, ...users});
    });

    it("should create a new caamFlightManagementSampleD", () => {
      assert.strictEqual(caamFlightManagementSampleDCreated.flightNumber, options.flightNumber);
assert.strictEqual(caamFlightManagementSampleDCreated.callsign, options.callsign);
assert.strictEqual(caamFlightManagementSampleDCreated.aircraftType, options.aircraftType);
assert.strictEqual(caamFlightManagementSampleDCreated.departure, options.departure);
assert.strictEqual(caamFlightManagementSampleDCreated.destination, options.destination);
assert.strictEqual(caamFlightManagementSampleDCreated.eobtUtc, options.eobtUtc);
assert.strictEqual(caamFlightManagementSampleDCreated.route, options.route);
assert.strictEqual(caamFlightManagementSampleDCreated.cruisingAltitude, options.cruisingAltitude);
assert.strictEqual(caamFlightManagementSampleDCreated.fuelOnBoardKg, options.fuelOnBoardKg);
assert.strictEqual(caamFlightManagementSampleDCreated.status, options.status);
    });
  });

  describe("#get", () => {
    it("should retrieve a caamFlightManagementSampleD by ID", async () => {
      const retrieved = await thisService.Model.findById(caamFlightManagementSampleDCreated._id);
      assert.strictEqual(retrieved._id.toString(), caamFlightManagementSampleDCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"flightNumber":"updated value","callsign":"updated value","aircraftType":"updated value","departure":"updated value","destination":"updated value","eobtUtc":100,"route":"updated value","cruisingAltitude":"updated value","fuelOnBoardKg":100,"status":"updated value"};

    it("should update an existing caamFlightManagementSampleD ", async () => {
      const caamFlightManagementSampleDUpdated = await thisService.Model.findByIdAndUpdate(
        caamFlightManagementSampleDCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(caamFlightManagementSampleDUpdated.flightNumber, options.flightNumber);
assert.strictEqual(caamFlightManagementSampleDUpdated.callsign, options.callsign);
assert.strictEqual(caamFlightManagementSampleDUpdated.aircraftType, options.aircraftType);
assert.strictEqual(caamFlightManagementSampleDUpdated.departure, options.departure);
assert.strictEqual(caamFlightManagementSampleDUpdated.destination, options.destination);
assert.strictEqual(caamFlightManagementSampleDUpdated.eobtUtc, options.eobtUtc);
assert.strictEqual(caamFlightManagementSampleDUpdated.route, options.route);
assert.strictEqual(caamFlightManagementSampleDUpdated.cruisingAltitude, options.cruisingAltitude);
assert.strictEqual(caamFlightManagementSampleDUpdated.fuelOnBoardKg, options.fuelOnBoardKg);
assert.strictEqual(caamFlightManagementSampleDUpdated.status, options.status);
    });
  });

  describe("#delete", async () => {
    it("should delete a caamFlightManagementSampleD", async () => {
      await app
        .service("users")
        .Model.findByIdAndDelete(usersServiceResults._id);

      ;

      const caamFlightManagementSampleDDeleted = await thisService.Model.findByIdAndDelete(caamFlightManagementSampleDCreated._id);
      assert.strictEqual(caamFlightManagementSampleDDeleted._id.toString(), caamFlightManagementSampleDCreated._id.toString());
    });
  });
});