1. npm install react-native-cli -g
2. npm install react-native-rename -g
3. git clone ssh://git@gitlab.playcourt.id:31022/telkomdev/codebase-mobile.git
4. cd name-project
5. rename package name in project
    - react-native-rename newName -b bundleIdentifier
        ex: react-native-rename "codebase mobile" -b com.telkom.codebasemobile
6. npm install
7. running in androin or ios
    - run in android : react-native run-android
    - run in ios: react-native run-ios