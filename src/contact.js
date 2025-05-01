const loadContact = function () {
  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "contact-container");

  const contactInformationContainer = document.createElement("div");
  contactInformationContainer.setAttribute(
    "id",
    "contact-information-container"
  );

  const contactInformationContainerTitle = document.createElement("div");
  contactInformationContainerTitle.setAttribute(
    "id",
    "contact-information-container-title"
  );
  contactInformationContainerTitle.textContent = "Information";
  contactInformationContainer.appendChild(contactInformationContainerTitle);

  const phoneNumber = createContactInformationPair(
    "Phone Number",
    "XXX-XXX-XXXX"
  );
  contactInformationContainer.appendChild(phoneNumber);
  contactInformationContainer.appendChild(createHR());

  const emailAddress = createContactInformationPair(
    "Email Address",
    "chickenshop@email.com"
  );
  contactInformationContainer.appendChild(emailAddress);
  contactInformationContainer.appendChild(createHR());

  const physicalAddress = createContactInformationPair(
    "Physical Address",
    "18 Broad Street, New York, NY 10005"
  );
  contactInformationContainer.appendChild(physicalAddress);
  contactInformationContainer.appendChild(createHR());

  // Start Of Contact Form

  const contactFormContainer = document.createElement("div");
  contactFormContainer.setAttribute("id", "contact-form-container");

  const contactFormContainerTitle = document.createElement("div");
  contactFormContainerTitle.setAttribute("id", "contact-form-container-title");
  contactFormContainerTitle.textContent = "Message";
  contactFormContainer.appendChild(contactFormContainerTitle);

  const form = document.createElement("form");
  form.setAttribute("action", "");
  form.setAttribute("method", "get");

  // Input For "Name"
  const formNameContainer = document.createElement("div");

  const formNameLabel = document.createElement("label");
  formNameLabel.setAttribute("for", "name");
  formNameLabel.textContent = "Name";
  formNameContainer.appendChild(formNameLabel);

  const formNameInput = document.createElement("input");
  formNameInput.setAttribute("type", "text");
  formNameInput.setAttribute("id", "name");
  formNameInput.setAttribute("name", "name");
  formNameContainer.appendChild(formNameInput);

  form.appendChild(formNameContainer);

  // Input For "Email"

  const formEmailContainer = document.createElement("div");

  const formEmailLabel = document.createElement("label");
  formEmailLabel.setAttribute("for", "email");
  formEmailLabel.textContent = "E-Mail";
  formEmailContainer.appendChild(formEmailLabel);

  const formEmailInput = document.createElement("input");
  formEmailInput.setAttribute("type", "email");
  formEmailInput.setAttribute("id", "email");
  formEmailInput.setAttribute("name", "email");
  formEmailContainer.appendChild(formEmailInput);

  form.appendChild(formEmailContainer);

  // Input For "Message"

  const formMessageContainer = document.createElement("div");

  const formMessageLabel = document.createElement("label");
  formMessageLabel.setAttribute("for", "message");
  formMessageLabel.textContent = "Message";
  formMessageContainer.appendChild(formMessageLabel);

  const formMessageInput = document.createElement("textarea");
  formMessageInput.setAttribute("id", "message");
  formMessageInput.setAttribute("name", "message");
  formMessageInput.setAttribute("rows", "5");
  formMessageInput.setAttribute("cols", "40");
  formMessageContainer.appendChild(formMessageInput);

  form.appendChild(formMessageContainer);

  // Form Button

  const formButtonContainer = document.createElement("div");

  const formButton = document.createElement("button");
  formButton.setAttribute("type", "submit");
  formButton.textContent = "Send";

  formButton.addEventListener("click", (event) => {
    event.preventDefault();
  });

  formButtonContainer.appendChild(formButton);
  form.appendChild(formButtonContainer);

  contactFormContainer.appendChild(form);

  contactContainer.appendChild(contactInformationContainer);
  contactContainer.appendChild(contactFormContainer);

  return contactContainer;
};

const createContactInformationPair = function (source, value) {
  const contactInformationPair = document.createElement("div");
  contactInformationPair.setAttribute("class", "contact-information-pair");

  const contactInformationSource = document.createElement("div");
  contactInformationSource.setAttribute("class", "contact-information-source");
  contactInformationSource.textContent = source;
  contactInformationPair.appendChild(contactInformationSource);

  const contactInformationValue = document.createElement("div");
  contactInformationValue.setAttribute("class", "contact-information-value");
  contactInformationValue.textContent = value;
  contactInformationPair.appendChild(contactInformationValue);

  return contactInformationPair;
};

const createHR = function () {
  const hr = document.createElement("hr");

  return hr;
};

export { loadContact };
