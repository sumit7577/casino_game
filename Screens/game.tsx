import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import GameTable from '../Components/GameTable';
import { size, theme, image } from "../Utils";
import _ from 'lodash';
import { Block } from 'galio-framework';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Game: React.FC = () => {
    return (
        <SafeAreaView style={{ height: "100%", width: "100%", backgroundColor: theme.COLORS.THEME }}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text>
                        i am text
                    </Text>
                </View>
                <View style={styles.middle}>
                    <Text>
                        i am text
                    </Text>
                </View>
                <View style={styles.right}>
                    {_.map(_.chunk(size.TableNumber, 12), (element: any, index: number) => (
                        <Block style={{ width: "91%" }} row key={index}>
                            {_.map(element, (item: number, i: number) => (
                                <GameTable value={item} key={i} />
                            ))}
                        </Block>
                    )
                    )}
                    <Block row space='between' style={{ width: "92%", borderWidth: 1, borderColor: theme.COLORS.BORDER, height: 50 }}>
                        <Block middle style={styles.blocks}>
                            <Text style={styles.text}>1ˢᵗ 12</Text>
                        </Block>

                        <Block middle style={styles.blocks}>
                            <Text style={styles.text}>2ⁿᵈ 12</Text>
                        </Block>

                        <Block middle style={styles.blocks}>
                            <Text style={styles.text}>3ʳᵈ 12</Text>
                        </Block>
                    </Block>

                    <Block row space='between' style={{ width: "92%", borderWidth: 1, borderColor: theme.COLORS.BORDER, height: 50 }}>
                        <Block middle style={[styles.blocks, { width: "16.4%" }]}>
                            <Text style={styles.text}>1 to 18</Text>
                        </Block>

                        <Block middle style={[styles.blocks, { width: "16.4%" }]}>
                            <Text style={styles.text}>EVEN</Text>
                        </Block>

                        <Block middle style={[styles.blocks, { width: "16%" }]}>
                            <View style={styles.pentagon}></View>
                        </Block>

                        <Block middle style={[styles.blocks, { width: "16%" }]}>
                            <View style={[styles.pentagon, { backgroundColor: theme.COLORS.GITHUB }]}></View>
                        </Block>

                        <Block middle style={[styles.blocks, { width: "16%" }]}>
                            <Text style={styles.text}>ODD</Text>
                        </Block >

                        <Block middle style={[styles.blocks, { width: "16.4%" }]}>
                            <Text style={styles.text}>19 to 36</Text>
                        </Block>
                    </Block>

                    <Block row style={styles.rightFooter}>

                        <View style={{ width: "35%" }}>
                            <Block style={{ borderWidth: 2.5, borderColor: theme.COLORS.DRIBBBLE, borderRadius: 4 }}>
                                <Block row middle space='between' style={{ backgroundColor: theme.COLORS.DRIBBBLE, marginTop: 4, marginLeft: 4, marginRight: 4, marginBottom: -1, borderRadius: 4 }}>
                                    <Icon name="account" size={30} color="#ffff" />
                                    <Block style={{ padding: 4 }}>
                                        <Text style={{ fontSize: 16, color: theme.COLORS.WHITE }}>
                                            Player_474279
                                        </Text>
                                        <Text style={{ fontSize: 16, color: theme.COLORS.WHITE }}>31,398</Text>
                                    </Block>
                                </Block>
                            </Block>
                            <Block style={{ backgroundColor: "#6a8a6f" }}>
                                <Text style={{ textAlign: "center", fontWeight: "400", fontSize: 13 }}>
                                    YOUR SESSION STATS
                                </Text>
                            </Block>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <Image source={image.gameTable.coin} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={image.gameTable.coin} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: "space-between" }}>
                            <Block row style={{ backgroundColor: theme.COLORS.GITHUB }}>
                                <Block>
                                    <Text style={{marginHorizontal:10}}>BET</Text>
                                </Block>
                                <Block>
                                    <Text>0</Text>
                                </Block>
                            </Block>
                            <Button title='SPIN' />
                        </View>

                    </Block>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        padding: 8,
    },
    left: {
        display: "flex",
        flex: 2,
    },
    middle: {
        flex: 1,
    },
    right: {
        display: 'flex',
        flex: 6,
    },
    text: {
        textAlign: "center",
        fontSize: 18,
        color: theme.COLORS.WHITE,
        fontWeight: '600',
    },
    blocks: {
        borderRightWidth: 1,
        borderColor: theme.COLORS.BORDER,
        width: "33.3%",
        alignItems: "center"
    },
    pentagon: {
        backgroundColor: theme.COLORS.RED,
        height: "50%",
        width: "40%",
        transform: [{ rotate: "45deg" }]
    },
    rightFooter: {
        padding: 4
    }
})

export default Game;