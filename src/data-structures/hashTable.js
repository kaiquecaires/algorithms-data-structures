class HashTable {
  constructor (size) {
    this.table = new Array(size)
    this.qtdItems = 0
    this._keys = []
  }

  _hash (key, tableSize) {
    let index = 0
    
    for (let i = 0; i < key.length; i++) {
      index = (index * key.length + i) % tableSize
    }

    return index
  }

  _resize () {
    const newTable = new Array(this.table.length * 2)
    
    this.table.forEach(item => {
      if (item) {
        item.forEach(([key, value]) => {
          const index = this._hash(key, newTable.length)

          if (newTable[index]) {
            newTable[index] = [...newTable[index], [key, value]]
          } else {
            newTable[index] = [[key, value]]
          }
        })
      }
    })

    this.table = newTable
  }

  set (key, value) {
    const verifyForResize = this.qtdItems / this.table.length
    
    if (verifyForResize > 0.8) {
      this._resize()
    }
    
    const index = this._hash(key, this.table.length)
    
    if (this.table[index]) {
      this.table[index] = [...this.table[index], [key, value]]
    } else {
      this.table[index] = [[key, value]]
    }
    
    this._keys.push(key)
    this.qtdItems++
  }

  get (key) {
    const index = this._hash(key, this.table.length)
    const arrayElements = this.table[index]

    if (!arrayElements) {
      return undefined
    }

    const [[, value]] = arrayElements.filter(([k, v]) => k === key)
    return value
  }

  keys () {
    return this._keys
  }
}
