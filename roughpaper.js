
function combat(health, damage) {
    if (health < damage) {
        return 0;
    } else {
        return health - damage;
    }
}

console.log(combat(100, 110));