class CombinedData {
  constructor(data1, data2) {
    this.data1 = data1;
    this.data2 = data2;
  }

  getData() {
    return {
      data1: this.data1,
      data2: this.data2,
      timestamp: new Date().toISOString(),
    };
  }
}

module.exports = CombinedData;