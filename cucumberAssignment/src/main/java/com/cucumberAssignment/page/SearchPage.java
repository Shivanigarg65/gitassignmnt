package com.cucumberAssignment.page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchPage extends HomePage{
	
	public SearchPage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id ="twotabsearchtextbox")
	public WebElement typeBox;

	@FindBy(id = "nav-search-submit-button")
	public WebElement Button;

	@FindBy(id = "OnePlus 9 Pro 5G (Morning Mist, 8GB RAM, 128GB Storage)") 
	public WebElement textMatch;


	public void typeBox(String typeBox)
	{
		this.typeBox.sendKeys(typeBox);

	}

	public void button(){
		this.Button.click();

	}

}
