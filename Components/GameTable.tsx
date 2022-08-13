import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Alert } from 'react-native'
import React from 'react'
import { Block } from 'galio-framework';
import { size, theme } from "../Utils";


interface game {
    value: number,
    styleText?: StyleProp<ViewStyle>,
    styleBox?: StyleProp<ViewStyle>,
}

class GameTable extends React.Component<game> {
    async componentDidMount(): Promise<void> {

    }

    async componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): Promise<void> {

    }
    render(): React.ReactNode {
        const makeDialogue = (): void => {
            Alert.alert("Clicked", `You Clicked ${value}`);
        }
        const { value, styleText, styleBox } = this.props;
        const containerStyle: StyleProp<ViewStyle> = [
            styleBox, styles.container
        ];
        const textStyle: StyleProp<TextStyle> = [
            styleText, styles.text
        ]
        return (
            <View>
                <TouchableOpacity onPress={makeDialogue}>
                    <Block center style={containerStyle}>
                        <Block middle style={{ height: 39, width: 35, borderRadius: 35 / 2, backgroundColor: value % 2 == 0 ? theme.COLORS.RED : theme.COLORS.GITHUB }}>
                            <Text style={textStyle}>
                                {value}
                            </Text>
                        </Block>
                    </Block>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: theme.COLORS.BORDER,
        height: size.height / 7,
        width: size.width / 20,
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        color: theme.COLORS.WHITE
    }
});

export default GameTable;