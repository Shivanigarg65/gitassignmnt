package com.cucumberAssignment.page;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class HomePage{


	public static WebDriver driver;
	public static File file;
	public static FileInputStream fis;
	public static Properties prop;

	static {
		file = new File("./resources/config.properties");
		try {
			fis = new FileInputStream(file);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		prop = new Properties();
		try {
			prop.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}

	}
	
	public void foundLogin() {
		driver.findElement(By.id("nav-link-accountList")).click();
	}

	
	public void gettoHomePage() {
		System.setProperty(prop.getProperty("driverProperty"),prop.getProperty("driverPath"));
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get(prop.getProperty("url"));
		
		
	}
	
	
	public void close() {
		driver.close();
		driver.quit();
	}
	
}
