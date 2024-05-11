function secureConfig(config){
    const apiKey=Symbol("api-key");

    config[apiKey]="Hello"
    return config;
}

console.log(secureConfig({}));