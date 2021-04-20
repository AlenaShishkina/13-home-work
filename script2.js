function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function (distance) {
    return this.maxDistance > distance
}
Unit.prototype.isReadyToFight = function() {
    return this.health >= this.maxHealth/2;
}
Unit.prototype.restore = function () {
    if (this.health < this.maxHealth) this.health = this.maxHealth;
}
Unit.prototype.clone = function () {
    return new Unit(this.type, this.health, this.maxHealth, this.maxDistance)
}

function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
}

Army.prototype.isReadyToMove = function (way) {
    return this.units.every(unit => unit.isReadyToMove(way));
}
Army.prototype.isReadyToFight = function () {
    return this.units.every(unit => unit.isReadyToFight());
}
Army.prototype.restore = function () {
    this.units.forEach(unit => unit.restore())
}
Army.prototype.getReadyToMoveUnits = function(way) {
    return this.units.filter((unit) => unit.isReadyToMove(way));
}
Army.prototype.combineUnits = function (arr) {
    arr.forEach(unit => this.units.push(unit))
}
Army.prototype.cloneUnit = function (num) {
    const unitId = num - 1;
    const newUnit = new Unit(this.units[unitId].type, this.units[unitId].health, this.units[unitId].maxHealth, this.units[unitId].maxDistance);
    return newUnit;

}