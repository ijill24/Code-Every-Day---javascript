export const EXPECTED_MINUTES_IN_OVEN = 40

export const remainingMinutesInOven = actualOvenMinutes => {
  return EXPECTED_MINUTES_IN_OVEN - actualOvenMinutes;
}

export const preparationTimeInMinutes = (numberOfLayers) => {
    return numberOfLayers * 2;
}

export const totalTimeInMinutes = (numberOfLayers, actualOvenMinutes) => {
    return (2 * numberOfLayers) + actualOvenMinutes;
}