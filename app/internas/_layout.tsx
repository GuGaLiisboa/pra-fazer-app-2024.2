import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                // COR DO CABEÇALHO
                headerStyle: { backgroundColor: "#F60"},
                // COR DA TAB BAR
                tabBarStyle: {backgroundColor: "#070A52"},
                headerTitleAlign: 'center',
                // COR DO TITULO DA PAGE
                headerTintColor: '#FFF',
                tabBarActiveTintColor: '#F60'
            }}
        >
            <Tabs.Screen name="tasks" options={{
                headerTitle: "Tarefas",
                tabBarLabel: "Tarefas",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                    name="check-circle-outline" color={
                    color } size={32} />
                )
            }} />
            <Tabs.Screen name="user" options={{
                headerTitle: "Dados do Usuário",
                tabBarLabel: "Dados do Usuário",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                    name="account" color={
                    color } size={32} />
                )
            }} />
            <Tabs.Screen name="about" options={{
                headerTitle: "Sobre o aplicativo",
                tabBarLabel: "Sobre o Aplicativo",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                    name="information-outline" color={
                    color } size={32} />
                )
            }} />
        </Tabs>
    );
}
