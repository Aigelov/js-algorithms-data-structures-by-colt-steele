class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);

    return this.keyMap;
  }

  get(key) {
    let index = this._hash(key);

    if (this.keyMap[index]) {
      const found = this.keyMap[index].find(item => item[0] === key)

      if (found && found.length) {
        return found[1];
      }
    }

    return undefined;
  }

  keys() {
    let keysArr = [];
    this.keyMap.forEach(item => {
      if (item) {
        item.forEach(innerItem => {
          if (!keysArr.includes(innerItem[0])) {
            keysArr.push(innerItem[0]);
          }
        })
      }
    })

    return keysArr;
  }

  values() {
    let valuesArr = [];
    this.keyMap.forEach(item => {
      if (item) {
        item.forEach(innerItem => {
          if (!valuesArr.includes(innerItem[1])) {
            valuesArr.push(innerItem[1]);
          }
        })
      }
    })

    return valuesArr;
  }
}

const hashTable = new HashTable(17);
hashTable.set('maroon', '#800000');
hashTable.set('yellow', '#FFFF00');
hashTable.set('olive', '#808000');
hashTable.set('salmon', '#FA8072');
hashTable.set('lightcoral', '#F08080');
hashTable.set('mediumvioletred', '#C71585');
hashTable.set('plum', '#DDA0DD');
console.log(hashTable.keys());
// console.log(hashTable.values());