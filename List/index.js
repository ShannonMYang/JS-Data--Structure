function List() {
    /**
     * 属性
     * 列表的元素个数
     */
    this.listSize = 0;
    /**
     * 属性
     * 列表的当前位置
     */
    this.pos = 0;
    // 初始化一个空数字来保存列表元素
    this.dataStore = [];
    /**
     * 方法
     * 清空列表中的所有元素
     */
    this.clear = clear;
    
    this.find = find;
    /**
     * 方法
     * 返回列表的字符串形式
     */
    this.toString = toString;
    /**
     * 方法
     * 在现有元素后插入新元素
     */
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.hasNext;
    this.hasPrev;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

// 给列表添加元素
function append(element) {
    this.dataStore[this.listSize++] = element;
}

// 从列表中查找某一元素
function find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

// 从列表中删除元素
function remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

// 列表中有多少个元素
function length() {
    return this.listSize;
}

// 显示列表中的元素
function toString() {
    return this.dataStore;
}

// 向列表中插入一个元素
function insert(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

// 清空列表中所有的元素
function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}

// 判断给定值是否在列表中
function contains(element) {
    for (let index = 0; index < this.dataStore.length; ++index) {
        if (this.dataStore[index] == element) {
            return true;
        }
    }
    return false;
}

// 遍历列表
function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    --this.pos;
}

function next() {
    if (this.pos < this.listSize) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function hasNext() {
    return this.pos < this.list.Size;
}

function hasPrev() {
    return this.pos >= 0;
}

let names = new List();
names.append("ZhangSan");
names.append("LiSi");
names.append("WangEr");
names.append("MaZi");
names.append("LiLei");
names.append("HanMeimei");
// 移动到列表中的第一个元素
names.front();
console.log(names.getElement());  // 显示ZhangSan
// 向前移动一个单位，并显示它
names.next();
console.log(names.getElement());  // 显示LiSi
// 先向前移动两次，然后向后移动一次，显示当前元素
// 其实，这是个迭代器概念
names.next();
names.next();
names.prev();
console.log(names.getElement());  // 显示WangEr