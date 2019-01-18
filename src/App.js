import React, {Component} from 'react';
import {
    Layout,
    EmptyState,
    Page,
    FooterHelp,
    Card,
    Link,
    Button,
    FormLayout,
    TextField,
    AccountConnection,
    ChoiceList,
    SettingToggle,
} from '@shopify/polaris';

require('dotenv').config();

// $query = $_GET;
// $store = $query['shop'];

const Http = new XMLHttpRequest();
const url = "https://${username}:${password}@{shop}.myshopify.com/admin/shop.json"


// const Shopify = require("shopify-api-node")
// const shopify = new Shopify({
//     shopName:
// })

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            email: '',
            checkboxes: [],
            connected: false,
        };
    }

    render() {
        // const breadcrumbs = [
        //     {content: 'Sample apps'},
        //     {content: 'Create React App'},
        // ];
        const primaryAction = {content: 'Options', icon: 'chevronDown'};
        // const secondaryActions = []; //{content: 'Import', icon: 'import'}

        // const choiceListItems = [
        //     {label: 'I accept the Terms of Service', value: 'false'},
        //     {label: 'I consent to receiving emails', value: 'false2'},
        // ];

        return (
            <Page
                title="Wavebreak"
                // breadcrumbs={breadcrumbs}
                primaryAction={primaryAction}
                // secondaryActions={secondaryActions}
            >
                <Layout>
                    {/*<EmptyState*/}
                        {/*heading = "Learn more about your store"*/}
                        {/*image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"*/}
                        {/*action={{*/}
                            {/*content: "Get Started",*/}
                            {/*onAction: () => onpagehide,*/}
                        {/*}}*/}
                    {/*>*/}
                    {/*</EmptyState>*/}
                    <Layout.AnnotatedSection
                        title="Average Time Between Purchases"
                        description="Last N Days"
                    >
                        <Card sectioned>
                        </Card>
                        {/*<SettingToggle*/}
                            {/*action={{*/}
                                {/*content: 'Customize Checkout',*/}
                            {/*}}*/}
                        {/*>*/}
                            {/*Upload your store’s logo, change colors and fonts, and more.*/}
                        {/*</SettingToggle>*/}
                    </Layout.AnnotatedSection>

                    {/*{this.renderAccount()}*/}

                    <Layout.AnnotatedSection
                        title="Average Customer Churn Duration"
                        description="Average time after which a customer who has not made a purchase is unlikely to ever make another purchase"
                    >
                        <Card sectioned>
                            {/*<FormLayout>*/}
                                {/*<FormLayout.Group>*/}
                                    {/*<TextField*/}
                                        {/*value={this.state.first}*/}
                                        {/*label="First Name"*/}
                                        {/*placeholder="Tom"*/}
                                        {/*onChange={this.valueUpdater('first')}*/}
                                    {/*/>*/}
                                    {/*<TextField*/}
                                        {/*value={this.state.last}*/}
                                        {/*label="Last Name"*/}
                                        {/*placeholder="Ford"*/}
                                        {/*onChange={this.valueUpdater('last')}*/}
                                    {/*/>*/}
                                {/*</FormLayout.Group>*/}

                                {/*<TextField*/}
                                    {/*value={this.state.email}*/}
                                    {/*label="Email"*/}
                                    {/*placeholder="example@email.com"*/}
                                    {/*onChange={this.valueUpdater('email')}*/}
                                {/*/>*/}

                                {/*<TextField*/}
                                    {/*multiline*/}
                                    {/*label="How did you hear about us?"*/}
                                    {/*placeholder="Website, ads, email, etc."*/}
                                    {/*value={this.state.autoGrow}*/}
                                    {/*onChange={this.valueUpdater('autoGrow')}*/}
                                {/*/>*/}

                                {/*<ChoiceList*/}
                                    {/*allowMultiple*/}
                                    {/*choices={choiceListItems}*/}
                                    {/*selected={this.state.checkboxes}*/}
                                    {/*onChange={this.valueUpdater('checkboxes')}*/}
                                {/*/>*/}

                                {/*<Button primary>Submit</Button>*/}
                            {/*</FormLayout>*/}
                        </Card>
                    </Layout.AnnotatedSection>
                    <Layout.AnnotatedSection
                        title = "Most popular products"
                        description = "Top N"
                    >
                        <Card sectioned>
                        </Card>
                    </Layout.AnnotatedSection>
                    <Layout.Section>
                        <FooterHelp>
                            For more information about app development, visit our{' '}
                            <Link url="https://github.com/joshua-yan/react-testing">public repository</Link>.
                        </FooterHelp>
                    </Layout.Section>
                </Layout>
            </Page>
        );
    }

    valueUpdater(field) {
        return (value) => this.setState({[field]: value});
    }

    toggleConnection() {
        this.setState(({connected}) => ({connected: !connected}));
    }

    connectAccountMarkup() {
        return (
            <Layout.AnnotatedSection
                title="Account"
                description="Connect your account to your Shopify store."
            >
                <AccountConnection
                    action={{
                        content: 'Connect',
                        onAction: this.toggleConnection.bind(this, this.state),
                    }}
                    details="No account connected"
                    termsOfService={
                        <p>
                            By clicking Connect, you are accepting Sample’s{' '}
                            <Link url="https://polaris.shopify.com">
                                Terms and Conditions
                            </Link>
                            , including a commission rate of 15% on sales.
                        </p>
                    }
                />
            </Layout.AnnotatedSection>
        );
    }

    disconnectAccountMarkup() {
        return (
            <Layout.AnnotatedSection
                title="Account"
                description="Disconnect your account from your Shopify store."
            >
                <AccountConnection
                    connected
                    action={{
                        content: 'Disconnect',
                        onAction: this.toggleConnection.bind(this, this.state),
                    }}
                    accountName="Tom Ford"
                    title={<Link url="http://google.com">Tom Ford</Link>}
                    details="Account id: d587647ae4"
                />
            </Layout.AnnotatedSection>
        );
    }

    renderAccount() {
        return this.state.connected
            ? this.disconnectAccountMarkup()
            : this.connectAccountMarkup();
    }
}

export default App;