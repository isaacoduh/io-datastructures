class HashTable {
  constructor(size = 6) {
    this.keyMap = new Array(size);
  }

  _hashFunction(key) {
    let sum = 0;
    const PRIME_NUMBER = 37;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(0) - 96;
      sum = (sum * PRIME_NUMBER * charCode) % this.keyMap.length;
    }

    return sum;
  }

  set(key, value) {
    const index = this._hashFunction(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
    return this;
  }

  get(key) {
    const index = this._hashFunction(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  getAllValues() {
    const values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }
}

const businessDirectory = new HashTable();
const businesses = [
  {
    name: "bytedance",
    info: { phone: "553-900-0903", address: "123 Byte St", type: "Tech" },
  },
  {
    name: "apple",
    info: { phone: "408-996-1010", address: "1 Apple Park Way", type: "Tech" },
  },
  {
    name: "google",
    info: {
      phone: "650-253-0000",
      address: "1600 Amphitheatre Pkwy",
      type: "Tech",
    },
  },
  {
    name: "microsoft",
    info: { phone: "425-882-8080", address: "1 Microsoft Way", type: "Tech" },
  },
  {
    name: "amazon",
    info: {
      phone: "888-280-4331",
      address: "410 Terry Ave N",
      type: "E-commerce",
    },
  },
  {
    name: "facebook",
    info: {
      phone: "650-543-4800",
      address: "1 Hacker Way",
      type: "Social Media",
    },
  },
  {
    name: "netflix",
    info: {
      phone: "888-638-3549",
      address: "100 Winchester Cir",
      type: "Entertainment",
    },
  },
  {
    name: "tesla",
    info: {
      phone: "650-681-5000",
      address: "3500 Deer Creek Rd",
      type: "Automotive",
    },
  },
  {
    name: "spacex",
    info: { phone: "310-363-6000", address: "Rocket Road", type: "Aerospace" },
  },
  {
    name: "uber",
    info: {
      phone: "415-612-8582",
      address: "1455 Market St",
      type: "Transportation",
    },
  },
];

// Add businesses to the directory
businesses.forEach((business) =>
  businessDirectory.set(business.name, business.info)
);

// retrieve and log all businesses
console.log("All Keys: ", businessDirectory.getAllKeys());
console.log("All Values: ", businessDirectory.getAllValues());

// retrieve and log specific business information
console.log("Google Info: ", businessDirectory.get("google"));
console.log("Tesla Info:", businessDirectory.get("tesla"));
