// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorIdnow",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorIdnow",
            targets: ["IDnowPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "IDnowPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/IDnowPlugin"),
        .testTarget(
            name: "IDnowPluginTests",
            dependencies: ["IDnowPlugin"],
            path: "ios/Tests/IDnowPluginTests")
    ]
)