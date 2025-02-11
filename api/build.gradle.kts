val ktor_version: String by project
val koin_version: String by project
val kotlin_version: String by project
val logback_version: String by project

plugins {
    application
    kotlin("jvm") version "1.5.30"
    kotlin("plugin.serialization") version "1.5.21"
}

group = "com.gmtkgamejam"
version = "0.0.1"
application {
    mainClass.set("com.gmtkgamejam.ApplicationKt")
}

repositories {
    mavenCentral()
}
dependencies {
    implementation("io.ktor:ktor-server-core:$ktor_version")
    implementation("io.ktor:ktor-server-netty:$ktor_version")
    implementation("io.ktor:ktor-auth:$ktor_version")
    implementation("io.ktor:ktor-serialization:$ktor_version")
    implementation("io.ktor:ktor-client-core:$ktor_version")
    implementation("io.ktor:ktor-client-cio:$ktor_version")
    implementation("io.ktor:ktor-client-serialization:$ktor_version")
    implementation("io.ktor:ktor-auth-jwt:$ktor_version")
    implementation("ch.qos.logback:logback-classic:$logback_version")

    // Logging support for Javacord
    implementation("org.apache.logging.log4j:log4j-to-slf4j:2.17.2")

    // Koin core features
    implementation("io.insert-koin:koin-ktor:$koin_version")

    // DB
    implementation("org.litote.kmongo:kmongo:4.2.8")

    // Discord bot
    implementation("org.javacord:javacord:3.4.0")

    testImplementation("io.ktor:ktor-server-tests:$ktor_version")
    testImplementation("org.jetbrains.kotlin:kotlin-test:$kotlin_version")
}
