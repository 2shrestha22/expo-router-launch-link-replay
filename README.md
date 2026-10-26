# expo-router: launch link replayed after Android activity recreation

Plain SDK 57 app: `/` (Home) and `/details/[id]`. The root layout logs `Linking.getInitialURL()` on mount.

## Steps (Android, release build)

```bash
npx expo run:android --variant release
adb shell am force-stop com.example.launchlinkreplay
adb shell am start -a android.intent.action.VIEW -d "launchlinkreplay://details/42" com.example.launchlinkreplay
```

1. The app cold-starts on Details 42. Tap **Back to home**. Home is shown.
2. Press the Home button.
3. Change the system font size (`adb shell settings put system font_scale 1.15`, or Settings > Display > Font size).
4. Open the app from the launcher icon.

**Expected:** Home.
**Actual:** Details 42. Logcat, same process id before and after:

```
ReactHost{0}.onHostDestroy(activity)
ReactNativeJS: REPRO details mounted id=42
ReactNativeJS: REPRO root mounted, getInitialURL=launchlinkreplay://details/42
```

Control: steps 2 and 4 without step 3 stay on Home.
