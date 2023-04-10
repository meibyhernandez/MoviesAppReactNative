import { View, Text } from "react-native";

import { TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

const MenuContainer = ({ title }) => {
  return (
    <TouchableOpacity className="px-10">
      <Text className="text-[#FFFF]">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
