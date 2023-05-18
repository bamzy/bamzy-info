package info.bamzy.springifyapi.utils;

import info.bamzy.springifyapi.AppGamingBasic;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class CustomLogger {
    public static final Logger logger = LogManager.getLogger(AppGamingBasic.class);
    public Logger getLogger(){
        return logger;
    }
}
