import React from "react";
import { StyleSheet, FlatList } from "react-native";

import TaskItem from "./TaskItem"

const sampleData=[
    {
      
            "issueId": 5345,
            "CurrentTopicId": 162,
            "CurrentTopicDescription": "IT PRM BREAKAWAY",
            "Details": "WFMS RED RIBBON",
            "actionplan": "HELP MAXIMISE WFMS IN RED RIBBON",
            "DateIssued": "2017-04-27T08:00:00",
            "PreviousTopicId": null,
            "PreviousTopicDescription": null,
            "targetcompletiondate": "2017-05-01T08:00:00",
            "FollowUpFrequency": 2,
            "IsFollowUpOnEmail": "Yes",
            "IsFollowUpOnSMS": "Yes",
            "IssueStatus": "O",
            "CreatedBy": "ERICA MAE SANCHEZ",
            "CreateDate": "2017-04-27T08:53:16.593",
            "newstatus": "P",
            "IsAcknowledgeBySource": "No",
            "SourceAcknowledgeDate": null,
            "IsAcknowledgeByRespondent": "No",
            "RespondentAcknowledgeDate": "2017-08-29T11:40:42.69",
            "FollowUpCounter": 74,
            "IssueDateParked": "2017-08-29T03:40:42.03",
            "IssueDateResumed": "2017-10-30T00:00:00",
            "NoOfAttachment": 0,
            "IssueHashcode": "3ea3f0eeadbf0e456cc03f8745157244",
            "meetingId": 815,
            "agenda": " IT PRM BREAKAWAY",
            "datestart": "2017-04-27T16:43:54.057",
            "dateend": "2017-04-27T16:53:55.72",
            "venue": "WAR ROOM",
            "facilitator": "MANUEL L. ONREJAS",
            "reference": null,
            "TopicHashcode": "02c64fc32783842f2eadf599c8e0c7ff",
            "raisedby": "MANUEL  L. ONREJAS JR.",
            "raisedbyemail": "mlonrejas@fastgroup.biz",
            "raisedbyempid": "9710049",
            "raisedbyphone": "",
            "responsible": "MARLO B. PRESADO",
            "responemail": "mbpresado@fastgroup.biz",
            "responempid": "1011343",
            "responphone": "09988825459",
            "sourcetype": "M",
            "lastsenddate": "2018-03-14T08:00:06.437",
            "NoOfResponse": 9,
            "PriorityFlag": 3,
            "DateClosed": null,
            "Collaborator": "ERICA MAE M. SANCHEZ",
            "TypeOfIssue": 1,
            "category": "I",
            "TopicAlias": "IT PRM BREAKAWAY",
            "bgcolor": "#FF6B5F",
            "collaboratoremail": "emmsanchez@fastgroup.biz",
            "collaboratorempid": null,
            "HasResponseAttachment": 1,
            "referenceId": null,
            "referencetype": "PALOUP",
            "statchangecounterlimit": 0,
            "topicId": 162,
            "statchangefupcounter": 1,
            "firstsenddate": null,
            "refsource": null,
       
        "canResponse": true
    },
    {
        
            "issueId": 6831,
            "CurrentTopicId": 179,
            "CurrentTopicDescription": "PIDH CALL TO ACTION MEETING",
            "Details": "K12 CLOSURE PENDING 2016",
            "actionplan": "ENSURE TO COLLECT THE PENDING K12 FROM 2016 UNTIL AUGUST",
            "DateIssued": "2017-06-22T13:28:14.483",
            "PreviousTopicId": null,
            "PreviousTopicDescription": null,
            "targetcompletiondate": "2017-06-28T00:00:00",
            "FollowUpFrequency": 3,
            "IsFollowUpOnEmail": "Yes",
            "IsFollowUpOnSMS": "Yes",
            "IssueStatus": "O",
            "CreatedBy": "BRET MICHAEL PLENO",
            "CreateDate": "2017-06-22T05:32:25.45",
            "newstatus": "C",
            "IsAcknowledgeBySource": "No",
            "SourceAcknowledgeDate": null,
            "IsAcknowledgeByRespondent": "Yes",
            "RespondentAcknowledgeDate": "2018-03-11T22:11:26.987",
            "FollowUpCounter": 77,
            "IssueDateParked": "2018-03-11T14:10:28.487",
            "IssueDateResumed": null,
            "NoOfAttachment": 0,
            "IssueHashcode": "cc08b1238bc07d54f66aa4536af30c6d",
            "meetingId": 1140,
            "agenda": " CALL TO ACTION MEETING",
            "datestart": "2017-06-22T13:21:58.397",
            "dateend": "2017-06-22T13:33:37.573",
            "venue": "Multi Purpose Hall Alabang HO",
            "facilitator": "Manuel L. Onrejas Jr.",
            "reference": null,
            "TopicHashcode": "e4d0c3b1c5a36ac51e579e5ef229c5d9",
            "raisedby": "MANUEL  L. ONREJAS JR.",
            "raisedbyemail": "mlonrejas@fastgroup.biz",
            "raisedbyempid": "9710049",
            "raisedbyphone": "",
            "responsible": "EMMANUEL J. JOSE",
            "responemail": "ejjose@fastgroup.biz",
            "responempid": "0112147",
            "responphone": "",
            "sourcetype": "M",
            "lastsenddate": "2018-03-13T08:00:11",
            "NoOfResponse": 5,
            "PriorityFlag": 0,
            "DateClosed": null,
            "Collaborator": null,
            "TypeOfIssue": 1,
            "category": "I",
            "TopicAlias": "PIDH CTA MEETING",
            "bgcolor": "#FFA54B",
            "collaboratoremail": null,
            "collaboratorempid": null,
            "HasResponseAttachment": 1,
            "referenceId": null,
            "referencetype": "PALOUP",
            "statchangecounterlimit": 0,
            "topicId": 179,
            "statchangefupcounter": 2,
            "firstsenddate": null,
            "refsource": null
        ,
        "canResponse": true
    }]

    _renderItem = ({item}) => (
        <TaskItem
        issueId={item.issueId}
        CurrentTopicDescription={item.CurrentTopicDescription}
        onItemPressed={() => props.onItemSelected(item.issueId)}
        />
      );

const TaskList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={this.sampleData}
      renderItem={this._renderItem}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default TaskList;
