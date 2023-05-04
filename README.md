# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Solution

This app is to build a reusable wizard component and is structured in following format

## Wizard
Wizard is used to wrap your steps. Each child component will be treated as an individual step

| Props       | Type          | Required  |
| ------------- |:-------------:| -----:|
|  activePageIndex   | string | not required |
| goNextPage()      | method      |   not required |


## Example
 <Wizard steps={3} activePageIndex={1}>
      <Layout style={layoutStyle}>
        <Content style={contentStyle}>
        <Progress />
          <Wizard.Pages>
            <Form1
              onChange={(newFields) => {
                setForm1Fields(newFields as any);
              }}
              fields={form1Fields as any}
            />
            <Form2
              onChange={(newFields) => {
                setForm2Fields(newFields as any);
              }}
              checkedValue={form2Fields as any}
            />
            <CheckoutForm form1={form1Fields} form2={form2Fields} />
          </Wizard.Pages>
          <Navigation handleClick={handleClick} currentState={apiCallStatus} />
        </Content>
      </Layout>
    </Wizard>

## useWizardContext
Used to retrieve all methods and properties related to your wizard. Make sure Wizard is wrapped around your component when calling useWizard.


Remark - You can't use useWizard in the same component where Wizard is used.

| name       | type          | description  |
| ------------- |:-------------:| -----:|
|  goNextPage   | () => void | Navigates to next step |
| goPreviousPage     | () => void       |   Navigates to next step  |
| activePageIndex | number | provides current active page index|
| steps | number | provides total count of active pages|

## Available Scripts



In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
