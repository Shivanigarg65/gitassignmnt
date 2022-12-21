package com.cucumberAssignment.page;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends HomePage{

	public LoginPage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id ="ap_email")
	public WebElement EmailAddress;

	@FindBy(id = "continue")
	public WebElement continueButton;

	@FindBy(id = "ap_password") 
	public WebElement Password;

	@FindBy(id = "signInSubmit") 
	public WebElement button_Submit;


	@FindBy(id ="createAccountSubmit") 
	public WebElement createAccountSubmit_button;

	@FindBy(xpath = "	//*[@id='nav-link-accountList']/span[1]") 
	public WebElement Hello_message;


	public void enterEmailAddress(String emailAddress)
	{
		this.EmailAddress.sendKeys(emailAddress);

	}

	public void enterPassword(String password){
		this.Password.sendKeys(password);

	}

	public void continueButton() {
		continueButton.click();
	}

	public void clickOnSubmiButton(){
		button_Submit.click();

	}

//	public void confirmLoginWasSuccessful() throws Exception {
//
//		System.out.println("Hello_message");
//		Assert.assertEquals("Hello, vipin", Hello_message.getText());
//	}
//
//	public void confirmLoginWasNotSuccessful() throws Exception {
//
//
//		System.out.println("createAccountSubmit_button");
//		Assert.assertEquals("Create your Amazon account", createAccountSubmit_button.getText());
//
//
//	}

}
