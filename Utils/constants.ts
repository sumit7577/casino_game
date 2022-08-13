import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const TableNumber: Array<number> = [3, 6, 9, 12, 15, 18, 21, 24, 27, 20, 33, 36,
                                    2, 5, 8,11, 14, 17, 20, 23, 26, 29, 32, 35,
                                    1, 4,7, 10, 13, 16, 19, 22, 25, 28, 31, 34];

export default { height, width, TableNumber };