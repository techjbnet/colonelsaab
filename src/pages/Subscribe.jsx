import Layout from "../components/Layout";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Subscribe = () => {
  const url =
    "https://colonelsaab.us12.list-manage.com/subscribe/post?u=a153744eb2a6accba5620bb2e&amp;id=456fd44b47&amp;f_id=00debbe0f0";
  return (
    <Layout>
      <>
        <div className="vh-50 container-fluid px-5 py-3">
          <div className="row">
            <div className="col-12 text-center d-flex flex-column align-items-center">
              <h2 className="mt-3 text-success">Subscribe</h2>
              <p className="text-success">
                Subscribe to Indian Restaurant Covent Garden Holborn Bloomsbury
              </p>
              <hr className="text-center w-50" />
            </div>
          </div>
        </div>
        <div className="col-12 text-center px-5 pb-2">
          <h3 className="text-success">
            Subscribe to Colonel Saab's Newsletter
          </h3>
          <p>
            Subscribe now to receive the latest news on our upcoming offers and
            special events.
          </p>
          <p>
            Don’t forget to include your birthday so we can send you an
            exclusive birthday surprise!
          </p>
          <span>
            By clicking ‘Subscribe’ you agree to receive communications from
            Colonel Saab and accept the data&nbsp;
            <a href="/privacy">Privacy Policy</a>
            .
            <br />
            We will always look after your data and won’t share it with anyone
            else.
          </span>
        </div>
        <div className="col-6 offset-3 my-3">
          {/* <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="btn btn-success text-center">
              Subscribe
            </button>

            <p className="pt-1">
              You may unsubscribe at any time using the link in our newsletter.
            </p>
          </form> */}
          <div className="mailChimp">
            <MailchimpSubscribe className="test" url={url} />
          </div>
          <p className="pt-1">
            You may unsubscribe at any time using the link in our newsletter.
          </p>
        </div>
        {/* <div id="mc_embed_signup">
          <form
            action="https://colonelsaab.us12.list-manage.com/subscribe/post?u=a153744eb2a6accba5620bb2e&amp;id=456fd44b47&amp;f_id=00debbe0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <h2>Subscribe</h2>
              <div class="indicates-required">
                <span class="asterisk">*</span> indicates required
              </div>
              <div class="mc-field-group">
                <label for="mce-EMAIL">
                  Email Address <span class="asterisk">*</span>
                </label>
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required email"
                  id="mce-EMAIL"
                  required
                />
                <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
              </div>
              <div class="mc-field-group">
                <label for="mce-FNAME">First Name </label>
                <input
                  type="text"
                  value=""
                  name="FNAME"
                  class=""
                  id="mce-FNAME"
                />
                <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
              </div>
              <div class="mc-field-group size1of2">
                <label for="mce-PHONE">Phone Number </label>
                <input
                  type="text"
                  name="PHONE"
                  class=""
                  value=""
                  id="mce-PHONE"
                />
                <span id="mce-PHONE-HELPERTEXT" class="helper_text"></span>
              </div>
              <div id="mce-responses" class="clear foot">
                <div
                  class="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_a153744eb2a6accba5620bb2e_456fd44b47"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                  <p class="brandingLogo">
                    <a
                      href="http://eepurl.com/ifhplr"
                      title="Mailchimp - email marketing made easy and fun"
                    >
                      <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div> */}
      </>
    </Layout>
  );
};

export default Subscribe;
