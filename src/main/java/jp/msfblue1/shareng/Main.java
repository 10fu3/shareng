package jp.msfblue1.shareng;

import java.util.Optional;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.setPort;

public class Main {
    public static void main(String[] args){
        settingPort();
        get("/hello", (req, res) -> "Hello Heroku World");
    }

    public static void settingPort(){
        Optional<String> optionalPort = Optional.ofNullable(System.getenv("PORT"));
        optionalPort.ifPresent(p -> {
            int port = Integer.parseInt(p);
            setPort(port);
        });
    }
}
