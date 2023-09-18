function distanceFromHqInBlocks(distance) {
    if (distance >= 42) {
        return distance - 42;
    } else if (distance < 42) {
        return 42 - distance;
    } else {
        return 'Invalid input';
    }
}

function distanceFromHqInFeet(distance) {
    let blockDistance = distanceFromHqInBlocks(distance);
    return blockDistance * 264;
}

function distanceTravelledInFeet(start, destination) {
    let distanceInFeet;
    if (start < destination) {
        distanceInFeet = (destination - start) * 264;
        return distanceInFeet;
    } else if (start > destination) {
        distanceInFeet = (start - destination) * 264;
        return distanceInFeet;
    }
}

function calculatesFarePrice(start , destination) {
    let price;
    let distanceTravelled = distanceTravelledInFeet(start, destination);

    if (distanceTravelled <= 400) {
        price = 0;
        return price;
    }else if (distanceTravelled>400 && distanceTravelled <= 2000 ){
        price = (distanceTravelled - 400) * 0.02
        return price;
    }else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
        price = 25;
        return price;
    }else if (distanceTravelled > 2500) {
        let message = 'cannot travel that far';
        return message;
    }
}
