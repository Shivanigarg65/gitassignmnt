package Runners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import io.cucumber.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/java/Features/Search.feature" , "src/test/java/Features/Login.feature"},
        plugin = { "pretty", "html:target/cucumber", "json:target/cucumber.json",
		"com.cucumber.listener.ExtentCucumberFormatter:output/report.html" },
        monochrome = true,
        glue = {"StepDefinitions"},
		tags = {"@Test1,@Login1"})

public class TestRunner extends AbstractTestNGCucumberTests {
//	@Override
//	@DataProvider(parallel = true)
//	public Object[][] scenarios(){
//		
//	}

}
