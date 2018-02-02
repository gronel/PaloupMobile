import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const startTab = () => {

    Promise.all([
        Icon.getImageSource("chart-bar", 30),
        Icon.getImageSource("note-multiple-outline", 30),
        Icon.getImageSource("bell-outline", 30),
        Icon.getImageSource("account-circle", 30)
    ]).then(source => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "com.paloupmobile.Stat",
                    label: "Statistics",
                    title: "Statistics",
                    icon: source[0],
                    navigatorStyle: {
                        navBarHidden: true
                    }
                }, {
                    screen: "com.paloupmobile.MyPalo",
                    label: "MyPalo",
                    title: "MyPalo",
                    icon: source[1],
                    navigatorStyle: {
                        navBarHidden: true
                    }
                }, {
                    screen: "com.paloupmobile.Notifications",
                    label: "Notifications",
                    title: "Notifications",
                    icon: source[2],
                    navigatorStyle: {
                        navBarHidden: true
                    }
                }, {
                    screen: "com.paloupmobile.You",
                    label: "You",
                    title: "You",
                    icon: source[3],
                    navigatorStyle: {
                        navBarHidden: true
                    }
                }
            ],
            appStyle: {
                tabBarBackgroundColor: '#ecf0f1',
                tabBarButtonColor: '#34495e',
                tabBarSelectedButtonColor: '#e74c3c',
                tabBarTranslucent: false,
                forceTitlesDisplay: true,
                tabFontFamily: 'Avenir-Medium' // existing font family name or asset file without extension which can be '.ttf' or '.otf' (searched only if '.ttf' asset not found)
            }
        })
    })
};

export default startTab;