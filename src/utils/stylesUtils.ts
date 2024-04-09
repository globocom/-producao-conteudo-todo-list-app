/*
 * Copyright (c) 2024, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import { Dimensions, StyleProp, ViewStyle } from "react-native";

const LARGE_DEVICE_WIDTH = 768;

export const getContainerStyles = (
  widthPercentage: number = 0.5
): StyleProp<ViewStyle> => {
  const windowWidth = Dimensions.get("window").width;

  if (windowWidth > LARGE_DEVICE_WIDTH) {
    return {
      width: `${widthPercentage * 100}%`,
      alignSelf: "center",
    };
  }

  return {};
};
