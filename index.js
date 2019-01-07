function distanceFromHqInBlocks(street) {
  let distance;
  if (street > 42) {
    distance = (street - 42);
  } else if (street < 42) {
    distance = (42 - street);
  }
  return distance;
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(one, two) {
  if (one > two) {
    return ((one - two) * 264)
  } else if (one < two) {
    return ((two - one) * 264)
  }
}

function calculatesFarePrice(start, destination) {
  let abbv = distanceTravelledInFeet(start, destination);
  if (abbv < 400) {
    return 0;
  } else if (abbv > 400 && abbv < 2000){
    return (abbv - 400) * .02;
  } else if (abbv < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
