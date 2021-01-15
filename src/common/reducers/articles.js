
  const initialData = [{
    'articleID':1,
    'articleName': `Rhea Chakraborty's call records reveal that she spoke to Sushant Singh Rajput only 147 times`,
    'articleDescription': `The call date records of Sushant Singh Rajput revealed that there were no calls or messages exchanged between Rhea Chakraborty and the late actor, after Disha Salian's death. While this revelation has raised a lot of questions, Rhea's call date records are sure to grab your attention.According to Times Now's latest report, the 'Jalebi' actress had called Sushant nearly 94 times while received 51 calls from him. While the total calls exchanged between the two total up to 147 calls, Rhea made the most number of calls to her father and brother, according to the latest records.`
},{
    'articleID':2,
    'articleName': `Court extends Munawar Faruqui remand by two weeks`,
    'articleDescription': `AFTER A Sessions Court rejected his bail plea, a Judicial Magistrate First Class on Wednesday extended the judicial custody of comedian Munawar Faruqui by two weeks. Faruqui has now been under arrest since January 1, and may stay behind bars till January 27. An application for bail is expected to come up for hearing at the High Court Friday.Faruqui, 28, was arrested along with four others for alleged objectionable remarks against Hindu deities and for “hurting religious sentiments” at a show in Indore, on a complaint by Eklavya Gaud, the son of BJP MLA Malini Gaud. The next day, Sadakat Khan was held when he came to meet Faruqui, a friend, in court. There is no video evidence of Faruqui having made the alleged remarks at the show.`
},{
    'articleID':3,
    'articleName': `Ahead of Covid vaccine rollout, Centre postpones polio immunisation drive to Jan 31`,
    'articleDescription': `The Centre on Thursday said it has rescheduled the anti-polio drive to January 31 in view of the nationwide Covid vaccine rollout on January 16. The Polio National Immunisation Day, which was earlier scheduled for January 17, has been defered to “ensure that Covid management and vaccination services, as well as non-Covid essential health services, proceed in tandem without adversely impacting each other”, the Union Ministry of Health and Welfare said.“The massive countrywide Covid-19 vaccination drive will be rolled out by Hon’ble Prime Minister from 16th January, 2021. This would be world’s largest immunisation exercise. Therefore, it has been decided by the Ministry of Health and Family Welfare (MoHFW) in consultation with the office of the Hon’ble President of India to reschedule the Polio vaccination day, also known as the National Immunisation Day (NID) or “Polio Ravivar” to 31th January 2021 (Sunday),” the ministry said.`
},{
    'articleID':4,
    'articleName': `40,000 health workers 1st in Gurgaon vaccine line`,
    'articleDescription': `Around 40,000 healthcare workers in Gurgaon will be administered the coronavirus vaccine in the first stage of vaccination, with the first round of doses expected to reach the district by Wednesday night or Thursday — two days before the process of vaccination kicks off on January 16.Speaking at a press conference Wednesday, Deputy Commissioner of Gurgaon Dr Yash Garg said, “The arrangements for administering the coronavirus vaccine to health workers in the first phase have been completed and the volunteers have been prepared. For the first phase, a target of vaccinating around 40,000 health workers has been set.”“The vaccines meant for Haryana will be received by Chief Minister Manohar Lal Khattar in Chandigarh Wednesday, and only after this it will be clear how many of these are meant for Gurgaon. We expect the vaccines to reach us by Wednesday night or Thursday,” he said.`
}]

export default (state, action) => {
    switch (action.type) {
      case "ADD_NEW_ARTICLE":
        return [...state, action.payload];
      case "DELETE_NEW_ARTICLE":
        state = state.filter((article)=>article.articleID != action.payload)
        return [...state];
      default:
        return initialData;
    }
  };