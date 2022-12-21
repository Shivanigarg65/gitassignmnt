package StepDefinitions;

import com.cucumberAssignment.page.HomePage;
import com.cucumberAssignment.page.SearchPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchStep {
	
	HomePage homePage = new HomePage();
	SearchPage searchPage = new SearchPage();
	
	@Given("^User Navigate to search bar$")
	public void user_Navigate_to_search_bar() throws Throwable {
		homePage.gettoHomePage();
	}

	@When("^I Enter correct \"([^\"]*)\" in search bar$")
	public void i_Enter_correct_in_search_bar(String arg1) throws Throwable {
		searchPage.typeBox(arg1);
		searchPage.button();
	}

	@Then("^Item Show sucessful$")
	public void item_Show_sucessful() throws Throwable {
	    System.out.println("Pass");
	    homePage.close();
	}

}
