function List() {
    this.listSize = 0;
    this.pos = 0;
    // 初始化一个空数字来保存列表元素
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
}