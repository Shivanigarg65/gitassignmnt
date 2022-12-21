package StepDefinitions;

import com.cucumberAssignment.page.HomePage;
import com.cucumberAssignment.page.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStep{
	
	
	HomePage homePage = new HomePage();
	LoginPage loginPage = new LoginPage();
	
	@Given("^Open chrome and navigate to loginPage$")
	public void open_chrome_and_navigate_to_loginPage(){

		homePage.gettoHomePage();
		homePage.foundLogin();
	}

	@When("^invalid \"([^\"]*)\" and \"([^\"]*)\" is entered$")
	public void invalid_and_is_entered(String email, String password){
		
		loginPage.enterEmailAddress(email); 
		loginPage.continueButton();
		loginPage.enterPassword(password);                 
		loginPage.clickOnSubmiButton();
		
	}

	@Then("^user should not be logged in successfully$")
	public void user_should_not_be_logged_in_successfully() {

		System.out.println("Passed");
		homePage.close();
	}

	@Given("^User Navigate to LoginPage$")
	public void user_Navigate_to_LoginPage(){

		homePage.gettoHomePage();
		homePage.foundLogin();
	}

	@When("^I Enter correct \"([^\"]*)\" and \"([^\"]*)\"is entered$")
	public void i_Enter_correct_and_is_entered(String email1, String pass) {

		loginPage.enterEmailAddress(email1); 
		loginPage.continueButton();
		loginPage.enterPassword(pass);                 
		loginPage.clickOnSubmiButton();
		//Assert.assertTrue(true);
	}

	@Then("^Login should be sucessful$")
	public void login_should_be_sucessful() {

		System.out.println("Passed");
		homePage.close();
	}


}
