package com.pandh;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import java.util.Arrays;
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;
import io.invertase.firebase.messaging.ReactNativeFirebaseMessagingPackage;
//import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.reactnativecommunity.viewpager.RNCViewPagerPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.inprogress.reactnativeyoutube.ReactNativeYouTube;

public class MainApplication extends NavigationApplication {

@Override
protected ReactGateway createReactGateway() {
ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
@Override
protected String getJSMainModuleName() {
return "index";
}
};
return new ReactGateway(this, isDebug(), host);
}

@Override
public boolean isDebug() {
return BuildConfig.DEBUG;
}

protected List<ReactPackage> getPackages() {
// Add additional packages you require here
// No need to add RnnPackage and MainReactPackage
return Arrays.<ReactPackage>asList(
// eg. new VectorIconsPackage()
        new ReactNativeFirebaseAppPackage(),
        new ReactNativeFirebaseMessagingPackage(),
        new AsyncStoragePackage(),
        new RNCViewPagerPackage(),
        new RNCWebViewPackage(),
        new ReactNativeYouTube()
        //new FBSDKPackage()
);
}

@Override
public List<ReactPackage> createAdditionalReactPackages() {
return getPackages();
}

}
