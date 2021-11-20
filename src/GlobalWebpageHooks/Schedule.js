import React, { useState } from 'react';

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Fall_Calendar from '../Files/Fall_Calendar.pdf';


const Schedule = () => {
 
    return (
        <Document>
            <Page size="A4">
                <View>
                    <Fall_Calendar/>
                </View>
            </Page>
        </Document>
    
    );
}
export default Schedule;
//https://www.npmjs.com/package/react-pdf