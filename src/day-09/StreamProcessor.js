function processStream(input) {
    let sum = 0;
    let inGarbage = false;
    let canceled = 0;
    let openedGroups = 0;
    for (let i = 0; i < input.length; i++) {
        let c = input[i];

        if (inGarbage) {
            // garbage group
            if (c === '!') {
                i++;
            } else if (c === '>') {
                inGarbage = false;
            } else {
                canceled++;
            }
        } else {
            // non garbage group
            if (c === '<') {
                inGarbage = true;
            } else if (c === '{') {
                openedGroups++;
            } else if (c === '}') {
                sum += openedGroups--;
            }
        }
    }

    return canceled;
}

console.log(processStream('<>'));  //0 characters.
console.log(processStream('<random characters>'));  //17 characters.
console.log(processStream('<<<<>'));  //3 characters.
console.log(processStream('<{!>}>'));  //2 characters.
console.log(processStream('<!!>'));  //0 characters.
console.log(processStream('<!!!>>'));  //0 characters.
console.log(processStream('<{o"i!a,<{i<a>'));  //10 characters.

console.log(processStream('{}'));
console.log(processStream('{{{}}}'));
console.log(processStream('{{},{}}'));
console.log(processStream('{{{},{},{{}}}}'));
console.log(processStream('{<a>,<a>,<a>,<a>}'));
console.log(processStream('{{<ab>},{<ab>},{<ab>},{<ab>}}'));
console.log(processStream('{{<!!>},{<!!>},{<!!>},{<!!>}}'));
console.log(processStream('{{<a!>},{<a!>},{<a!>},{<ab>}}'));
console.log(processStream('{{{{{<!>,<!o,!!!>{>,{<<a!>u!>eio!>ui>}},{},{{<!!e!>>},{{<uo\'<!!!>>},{<!>\'!>},<e!>,<"ea!!!>!>,<>}}}},{{{{<"a">,<!><<>}}}},{{{{{},{<{!!"!><ae<},!>!>!!!>}\'!!>}},<!!a{!!!!!>!>,<!!!>,<{oiu<a!!,<>},{<>}}}},{{{{<eoa!!eeea{!,<>}},{{<!!!!,}!>!!a!!!}e!>},<!!!!!>!>i!e!>,<!u<!!{!!!>!!!>>}}}},{{{{{<!ea,uio!}"!>},<!>},<u<!!!!o!<,!>>,<!>},<">},{}},{<ua"!>,<!!!>eouaa"o}!!!>!>,<>}},{<a}!>!!<\'a!!<!u!!!!!>!!!>!!!a!>},<!>,<>}},{{{},{{{},<ua}!>!!!>i}}u!!!>},<!>!ii!!\'!,>},{{<{>},{<i<!!!e}!>,<!"\'a!!u!!{\',>}}}},{<!>},<!!!!},o}!!}{!!!">}}},{{{{},{<!>},<!!!!!>}}{\'>}}},{{{{<},{a!>,<>}},{<>,<!i>}},{{{<"u!i{!i}a!!!>"\'>}}}},{{{<<e!\'!!i\'!!}{!>,<u,""!!i<ui!!!!!>!!<>},<!!!>\'u!!ea!>u\'!>}!!!!!>>},{{}},{<"i}u,,>}}}},{{{{{{<\',!!,uo!,"<,{!i"{<<o<o>},<<a!>},<!!ee"\'!!>},<>},{{},{<{!!!!,!>,<,">}},{{}}},{{{{},<,}i!!,e!>,<!!!!<!!}!!{!>i{ou>},{{},{<!!!>a"!!!>!!!>a,!!i!>,<!<"e"i}!!i\'e!!!>>}}},{{<{!>!>},<a<i!>,<uao>,{{<<>},<!!!e}a!>}>}},{{<"!"a,!!!>{}!!u\'u{>}}},{{<oe!>},<\'!><>},{<!!!>i!!!>!!!oa<!><oeo!>},<>},{<}!!!!"!a,!!\'!!!>>,<!!!>!>},<!>>}},{{{<ei<"!">,<io!!!!},!!<!!a<!{a,\'ei>},{}},{<}!!!>,<!!!>!>},<!i}<i>,<a\',!>{!>},<o!>!!!!!>"o!!!!!{}!o>}}},{{{<">,{}},{{{<"}!i!!oi!!!>},<\'\'>},{}},{{<u!>,<ea!>},<!!!>!!>}}}}}},{},{},{{{{{}},{<u}!>},<,{!!,!!{}oo!>,<!>,<>}},{{{{},<o!a}\'!!!>"!iii!>,<{!>},<>},{<!u\'}}!>},<!>,<!>{!>,<u}}a!!u,u>}}},{{<"!!!>!>},<!>},<\'>,<{a!>},<uuo>},{},{{},{{<!!!>!,!>},<\'\'!!!>,<!>{!!!>!!!>!!!>},<{,!!!!e}i!!,>},<!!!!!<<o!!!>\'e!u!!!>e!>u!"">}}},{{{<!>},<!!u>}},{{<<"!>!!!>e!>e!!!>!>,<a!!!!!!!!!\'ia>,{}}}}},{{{<!>!!{}!>!>,<>},{{}}},{{<!!!>ai}>}},{{<!!}\'!!}!>,<o!>},<{!>},<!!!>,<\'\'!>,<!>},<!!!!,!>>,{<!>,<!a!!!>,<}<\'!o>}}}},{{{{{<>,{{<!!!!\'!>,<!>},<<oe!!!>i!!{i<!>}e>}}},{{<!!!!!!!>ao<!>},<!>,<!>a!!,!!!>!e!>u>}}},{{},{{<"{a!>}!>},<},},!>>}}},{{<!!!>,!!a!!a!!!>},<i>},{<!!!>}!>,<>}}},{<!!!>},<!>\'!!!><,!<!!!>,!ua!!!>e!>},<a!>},<<>}},{{},{{{<{u{aie!!"!!!>a>}}}}},{{{},<a!>},<u>},{{{<!!}<>}},{{{}}}},{<!>!>},<!i<}>,<"!!!>!>},<!>i!!!>o}u{!!!><{>}}},{{{<!>},<<,!>,<!!{!>},<{<o!>},<"i!<\'ei>,{}},{{},{<uu!!!!!!o!!ei!!"{e\'\'!>!!!>>}}},{},{{{<e>},<ao>},{<ai!!!!!><}!>,<>,{{<!!!>o,a<!>,<\'}>},<o!!{!!!!!!a!oe!!"!,<a>}},{}}}},{{{{{{<o!>!!!!>},{{<i"a!"!e<!>},<u",oou!>ua!!!><>}},{{}}},{{{<>},<o!!!!!>,<!!!>,<a!!e!!!a"!,,!!!e}"e>},{<"!o!!{!i!!!oa!!!>!><,!>>,<e!>!!,u<u,i!!!!!>},<{\'"!>e{i\'>}}},{{<!>o!>!!!>!!a!e!<!!!>},<o!e}e!>},<ia">,<!!}!!!>uaao!!!>e!ai!!!>>}}},{{{<"!u,!!!>},<!>,<!oo"!>,<!!!>!!!>}i!!!>!!!>\'>,{<!!!!!>!!!a{o}<e<!!!>!>>}},{<!au"!!}{,o{!>},<!!>}},{<!>},<a!>,<"!>{\'ia!>{\'!!!>a!!{>},{{{<}e!>},<!!o}!>{!><!iio!!>}},{{{{<\'!!i!!\'o{,!e!!!>oi!>},<!!!>!!o>}},{{<,,i!!!>!a!,{{!>,<e!uo!>,<>}}},{{<!!!>},<<u,a>}}},{{}}}}},{{{<!!!>!>!>},<{i!!!!oe>,{<ui!>e!!<>}},{<!!>},{{{{{<"!>},<u!>},<!!<e>},{<o!>},<,!!u{o!e\'}\'!>,<!!{!>,<uo>,<!!!>>}}},{{{<!!!!!>\'e>},<!>,<!e,o!!!!o>}},{}},{{}},{{<a<o>},{<!!,}}i!>,<!e!>},<!!"a!>,<!!{a>}}}},{{}},{{<!>},<!!!>uoi!}eu},!!o!>,<iu{o,>},{{},<,!!!!!!!>!>,<o">},{<o>,{<!>},<!>},<!!a!><u!!!>}}!!!!!>uo>}}},{{},{<o!>},<ia!!!!!>!!u"!!u!>},<>}}},{{{<<{!!!!o!>,<!i<!!"e<!>,<!!}!>},<\'a{!i>,<!>>},{{<!>,<!>},<"!>,<{{\'>},{}}},{{{{{},{}},{{{{<u!>,!>!!!!!>!u<}iio"i\'>}},{<}}<e!>},<o{!i\'!!!>ioi"ua>}}},{<<}>}},{{{{}},{<!!>}},{{{{<{\',!>},<!>},<aue"!!!>>}},{}},{{<!>},<!!!>!>!>},<>}}},{{{<!>},<\'!!ao\'!>,<{<!>},<<,aeu>},{<{>}},{<<!>},<!!"}\'!>!\'uoo!!o"{aii!>},<,a>},{{<a!>>},<!i!!<e!!!>},<,!<!>,<!!!>!!!>!>,<!i,e<\'!!!>,<>}}},{{{<!!\'!!!>o}i{!><!!"}",e!>},<ii!!{>},{{<<{!>,<!!!>>},<">}},{{<eo!!!>{!>,<,<!!!!i!!!>!>},<<\'o>},{}}}},{{<!!!>o{}<!>,<<e>,{{<,}i!>},<!!!>},<!{>}}},{{<{ai!>,<\'u,!!!>\'!o!>,<i<!>,<}ai>},<ei!!a!!a}!i!!!>,<>},{<!!e!>},<{!!!>>,<!>},<!{!!!o"i!!{>}}},{{<!>},<!>},<\',ia,>,{<!>,<ou!e!>\'i!>,<iea}e!!o!>},<i!!e<>}}}}},{{{{{{{<e\'!o\'!!!>,<"!!!>!>},<iu>},{<<!!!><{>}},{<\'!>!>},<>,{}}},{},{{{{{{<!!!!,a!>,<!!!>,<u>},{<!\'!>},<!>},<!!{\'aia!!}!>},<,<!!a!!<io>}},{{{},{{<!>,<!!,}!"}}!!!>i!!!>!>,<!!!>!!<{>,{<<!!!>},<!!e\'<!!\'>}}}}},{{<!!u}!{,\'!>},<!!!><\'>,<u"!>},<i>},{{<{!>,<!!!!a<!!!,>},<i!>ia!!!,,!i"}"!!<!>a{!!!>!!}">},{{<}!>,<,>}}}}},{{{<!>,<!>},<,!<!!},e!!!>""a\'i!<eo<!!o>}}},{}},{{{{},{{<e<>}},{{{}}}},{{{<e!>>,<!!!>},<!>!!!>,<iu\'uo!"!>},<o!o,i!!!><!!!!!!!!>}},{},{{},<!!!!\'!>,<ia!!\'!!!>!!!>!>u!>!!a>}}},{{}},{{{},{{<,>},<i>}},{{{<<\'"oe!!o>},{<!>,<u!>"!"}{a>,<!!\'!o<o,!>,<!>,<u}!>},<\',!!!!u!o{!o,!"a>},{<!!uu\'!!a,\'!>{u{!!<!!}!!!!,!>,<>,{{<!>},<!!"}!!!>"!>},<!!!>!uue>}}}},{{<>,{{},{{<!!u\'a!!!>!!!!<!!!>!>},<\'>},{{<{,\'!!!!!>aa!!,uui}!!!>!o!!,e>}}}}},{{<oe!!!!!>>}}},{{{}},{{<!e!ioe>},{<,>}}}}},{{<a!e\'e,!>"\'<!>,<!!"i}a!>!!>,<ee}iu!}}a<!!},}\'!!o,!!>},{{{},{<e!!!>o,!!i\'ui!!!!i,a!>},<}>}},<!>},<!>,<,"!>},<!>,<{!>},<,,,>}}},{{<!{eu!>,<ue>,<e!!"\'{!>,<!>,<\'!>,<aaao"oa{!!<u!>},<>}},{{{<!>!\'!!eeu!>},<!>},<<!!}!>},<\'u{!!o>,{{<!>},<!!!><!>"!!e!>},<!!u!>},<>}}}},{{{<!!\'!!oa\'!!!!,!!!>>},<e!!}!!{}\'"!>},<!>,<}eue!!e>},{{<!!,!>!>},<o!>!!!>,<a\'"!!!>{o!ie!!!>>},{}}}}},{{{{<i!>},<!>},<e!\'u!>},<!>!>"!o<!>,<>},<"!!!!\'>},{{<!!}ai{<,!!o!,e!!u!>},<<u!>,<>}},{{{{<>}},{}},{<"!>},<}!!!!<<!!}!>},<!>u,"e>}}},{{{<!!!!!>!!!>,<!!i{!>},<!!i{{>,<a>},{}},{{{}},{<i>}},{{{<uuua!>!e">},{<!>,<!!!>}a<,!!!!,e!!!>>}},{<!!,!>},<!>},<!!o!>>,<!!!\'!!!!!!!>}"eua!!!>!!!>i!!!>,<!!a!!!>!{!>},<!!>}}},{{{}},{}}}},{{{{{<!>,<ei!!i>},<!>a{o>},{<!!u!>,<i>}},{<i\'"{>},{{{{<!{!!!!aa{\'\'!>,!!\'"!>,<!!!>,"a!"!>!>,<\'>}},{{<!{!"u!>,<o!!!!!>e!!!!!>},<!>!"}!i>},<e\'<\'!>,<i"}{!>,<!>},<"!!!>">}},{<!>!ui,e!!!>e>,<!>},<>},{}}},{},{{{<a>},<o"o!}!>,<\'>},{},{{<<!!!!!>!!ao!!eei!>,<>},<eu"!!!>}<}!!<o>}},{{{},{{{<,i}aui!!}!!!>}!!{!!!>\'!<\'!>,<<!>},<{>},{<">}},{<!>,>,{<!>,<!!a!>,<o>,<!"au{!!e!>!!}"}>}},{{<!!!>e!>},<o!!e!>e<ea!>!!,!u!!\'i!!!\',>},<!!!>},\'i!>},<,!>!\'!>!!"o,}!!!!!>>}},{{<!!{,oai},!!<!!!>\'aaa>}}},{{<}!o!>},<>}},{{{<,"}a<o{!>i>},{{<"!!e!!,!!e!>u!!!>!!!>,ue!!o,!>ei>},{{<>},<!!!>},<a\'o!!!>,<\'{!!!>io<!e}!><!\'>}}},{{{<>},{{},{{<!i}uee"e!!!>!!!!!,!!,!!!!!>u{!!"<>,{<\'eauu!!,i!!!<a<ea>}}},{}},{{{<!>},<eeiuo!!}<"!>},<ii,<>},<o>}}},{},{<"!>{>}},{{{<<!!!{!>au!!!!!>u!>},<,!>a>}}}}}},{{{},{}},{{<!!e!>!!,!>e"!>},<<e{!>},<\'!aeaoi>},<{o!!!!}ue!\'<\'!!!>!>!\'a<!}!!u!i>}},{{{{<\'<o!!}>}}},{<!>,<!>!>},<!u!>,e!>,<"!<eu\'!>,<,!>i>,{<>}}}},{{{{{{},<!!!>!>},<!<o!!!>i!>!!!>,\'>},{<!!!>u!ua!i>}}},{{{{<i!>},<!!<e<!!!><!"!>,<,!!>}},{{{{<!!!>o!!,}!,>}}},<!>!!"}!>i!>!!u!>,<!!!>!!o!>},<i">}},{{{{{<!!u!>,<">},{{}}}},{{{<!!\',>},{<"\',o!>},<e!!!!ee!!oi{i,>}},{{<\'>}}}},{{<>,<\'!>o!>},<!!,}<!>,<{{!!!!!>i!>"\'!!u>},{<"!>,<<!>!u!!\'u!!!>,!!aa!>},<!>!!uo"{>,{<!>},<ei!!!>},<,uu!!!!!!,!>io{!!!!>}}}}},{{{},{}},{{<!!!>,<!!!>!!,!!!>eo}u!!!!!>>,<i{!!!!!>!oi,!!e!!!>,<<!!!>!!!>,<,!>,<\'!>>},{{{},<!>},<{ao!""!>\'!>,<oaei>}},{<!!!>},<!,!>,<o>,{{<!>},<oiui}"!>,<""u!!!>}!>!!,ii!!>}}}}},{{<e!>},<o!!!>,<",>,{<!!!>iuoa!!!>!>,<e!!!>!!,}a\'!<a}!!!!,>}},{{},<!!!>!>,<!>},<!!!,\'i}>},{{{},{{}}},{{{<>}}}}}},{{{{{<{!>},<}u!!!!!>!\'!!!>!>},<}!!!>!>},<!>},<e,!!!>,!>,<>},<!>ea!!!!a<!!o!!i>}},{{{},{}}},{{},{<!{!>,<>,<<>}},{{{{{{<!>,<!!{!!!!}!!o!!!>}!eu!!!!!>,a"!!a!>ei<>,<!>,<!>},<"!"a>},{{{<!>}!!!>,<}a!i>,{<!>,!>},<i!!!>!!\'>}}},{{<<oi!}e<"u!!"}!!!><\'!!!>>},{<!!>}},{{<!!!>}\'!>},<u!<!>,<{!>,<<>},<u!,!!!>iooi!>e,{<"<io}!>,<>}},{{<!>},<!>},<!>},<o!>ua!!!!<uoi!!!>!>au{,>},<!!!>"e!>uu!>,<}>}},{{{},{{}}},{<ioe{!>,<oe{!!"!!!>!!">}},{{{<ei"!!!>!!!!!!!>,<!!,!!!!oo!!!!e!>,<\'!>},<>},{<u\'!!!a!!!>},<!>},<!!!<>,<,a,iu>}}}},{{{<<<a!><<!!!!!i"i!!!>,<!!!>{!>},<i!>},<},<>,<!>u{!!"!>!!},!!!!!!ii!>{!!e{aa!>},<>}},{{<>},<<!!!><!>,<i!>},<a,!,!>!>ii<!"o>}}},{{<!!\'}}<e}>,{<!!!>o{!>},<!io!!{{au!!o!i\'\'uo,!>},<>}}},{<!>,<!!>}},{{{{},{<e!>!>},<}>,<>}}},{<!ou"!!!!!>a!u!>,<!>},<<}}!!!>,<\'<aa>},{<"o!ii"!>,<"}!><!>!!{!>o,!!u!!!!!>},<a{>,<<!!i>}}}},{{{<<"}\'e<!>,<}!!!!!>},<,!>,<>},<{!>!>e!!!>!!ei{!>},<{{eoao"i>},{{<{!"{!!!{!!!!!>\'!eoee>},<o!!>},{<a!,!!!\'u>,{<!>,<!>},<i!"o,i!!!>},<>}}},{{{<ea}a!>!!!>!>!>},<!!!!!>,<e!>},<>,<",\'\'uooa!!\'uo>},{{<!!a>},{<u<!!}!!eu!!<!">}}},{{<!>,<u!>!>,<}!a!!!!e<uu!>oa!!!>},<e>},<<!!!>\'u}!\'""!!!>},<!!iu>}},{{{<!e\'">}},{<<\'}!>!!!!!>}!!!>!!!!!>i{!>,<!>ie>}}}},{}},{},{{{{<u!>!!!!!><a>,<,<\'>},{{}},{<ii"!!<i<!"u!>"!},e{,<>}},{<!>!!}!>,<"a{a,i!,{!!>,<!!i\'!}a!!!>},<<!!{!!!!!>},<!!}"o>},{{{{<ou!>,<a>},{<\'a,u<!!<iu}i!>!,>}},{{<,!!\'!>},<e>,<!>,<!>},<a!>},<,!>aou<!!!!!>!!\'!!!>\'{!!!ea!>,<>}},{}},{{<!!!>!!>}},{{{{{<ouu!!!i!>},<!!e!!,!!{u}\'e>},{<eeea}a>,<!{e!>!!,}a!!!>>}},{<,>}}},{<a!,u\'>,{<}{\'!>},<u!!\',,eu!uo!!!>>}},{<!!u\'>,{<",!!!!!!!>!>,<a}e}\'{>}}}}},{{{{<!\'!>},<!!i!!!o,u!>!!!!!!!>!!\'io<!!<!>},<>,<"!!!!!!!a{!>,<>},{}},{{},<!!o!>},<!!!!!>!,!!!>,<}!u,!o!!!>!!!>>}},{{<!>,<a{\'{e!,i!>},<!>,<!>,<>,<<\',}!,\'<!!!\'\'!>},<!>,<,>}}},{{<!<""e!u!"!>},<i!!!>o!!!>"!!,,!!i>,{{{<"e!!!>,<o!>},<!>a!!!a!>,<,""!>},<>,{{<},!!!>!!<i!>,<"iu>,{<u,!>u>}},{<i!>},<!!!!!>u!>}\'!>},<!!!>>}}},<e!!!>i!!i!!!>!!!!"o!!!!!!!>}ee<}!>>},{<a!>!!\'>}}},{{{<!>,<!!!>\'!>!>,<!>},<\'!>},<!!u!>!>,<!>,<>},{}},{{{},{<\',!!!>!>},<!!{<!!!!!>!!!>o!>},<a>}},{<uie!!!>>},{<{"o}u},!!!>"!!>,<!!!>!>,<!,i!!!>,<!!{"!!!>o!!!>!!u!!!!!>!!!!!>>}},{{{<\'o!<!!e}!!e!>,<!}!!u!>},<!>},<ao!!"!>},<!!}!>,<>},{{},<!!,!>!>}ua!!!!>}}}},{<\'!>!"!,!>,<!>},<!!!><eoiuu!!<!!!>!e!!!>>}},{{{<i!e<,!!!>!>},<,>},<<o!>,<<>},{{<>},{<!!!>iu!!!>!>!!!!!>!<!!!>a!!!>!!a!u!>>}},{<>,{{<a!>!>},<!>,<!!!>{!!i!u">}}}}}},{{{{{<!>},<}!!!>},<{!!}eu!>},<}i<oo!o>,<{!!ae!a\'!>},<!!>},{{<>},<!>},<!>},<{!!!!!!!>,<!>{!}}">},{<{!a!>},<!!!>eu!!{\'!>},<!!!i!o!!!ae}!!,>,{{<}!!!>!!<!!<<!!!>{oi{!>},<!!o<\'o{>},<!>!>,<!,ea}"!!<!>},<u!}"o!><i>}}},{{<!!!>}e!!!>>}}},{{{{{<!>>}},{{<"i>}}}},{{<a>},{<u{!!!!!>!<a!!{!!}i!!{!!!>!!{{!>,<u}u>}},{{{},<!>aoa!!{!>!!e!!!>!!!>}<\'!!},!!e}>}}}}},{{{{{{{{<!!!>"}>,{<a}a"!!!>,o<!!!>!>},<>}}},{{{<!!!>!!e!>!!!>>}},<!>},<a!>,<<!>,<i>},{{<!>},<"{!!!!eo!!!!!>,<",e!><u>},{<oue!>,<"!>,<>}}},{{{}},{{<!>,<e>,{<ui!!!>u!>},<!!ee{"<!!!>!!uiu!>},<,<!>},<>}},<!!{!!,"!!!>!!!!!!!>,<!!!>},<}>},{{{}},{{<>},<!>},<!!!>!>},<{<!>,<!!>}}},{{{<>},<!!}!>"<!>>},{{{{<!>,<!!uu!>e!>e}"!!ei!!!>>}}}},{<\'o>,{}}},{{<,!>,<"!!a!>e!}!!!!i!>>},{{{{<>}},{{{<>}}},{<!>!{!!{>,{}}},{{<!>},<u!>oe!>ao>}}},{{}}}},{{{},{{{<!>o,,>}},{{<u!!!>{!!\'!>!<\'\'o"{>,<!o!!!!u!!!>\'"e!!\'<a!!!><}!!"}!>,<>},{<,}!!<a}!"{!>,<e!!!!!>!>!>!!!>}!!!>!>,<oo>}}}},{{{{<}e}!!e!!!!!>{o!!!>!>o>}},{<!\'e!!!>!!!>eo!>},<>}},{{{<!,!!{!!a>},{<!!"!!}!!ei!>,<!!u!!!!!>!!au!!!>,<u>}}}},{{{<!>},<!i!!!>,<!!>},<!a{!>,<!!a!!a,!>},<!>"\'{i"!>,<!!!>!!>},{{{{<i!>"!!!!\'!!>,{<a!!\',!!!>>}},{}},{{{<\',u!>},<!!<!>!>ueuo!}!!!!e>}},{}}}},{{<,!>},<!>\'>}}},{{{<!!!,!!!>i"!ae!>,<!!!>},<e>}},{<,{i{!>},<ai!!}>}}},{{{},<!>,<!>},<<o!,o,<}>},{<a,<}!>!!e>,<}!>,<!>},<!>},<!!o!!!!!>,{"ai"u>}}}},{{{{},{{<!>,<{oi!iu{!!!>!!!>ea>},<e!>!><o!!u!!!!!>!>},<ee,"o{,\'>}},{{{<u!!}!!\'},!{!!!>!!!>}!>,<u!!!>o!!!!!ia,>}},{{<!>a!"!!{!!!>>,{{{{<o!>!!e\'<u!i!>a,e!>,<>},<!!}>},{<{a!>,<{,u!!!>i!!!>!>,<>}},{<!>},<!!!!!>{u>}}},{{<!!<!!!>o!>!!}!>},<"o!!eiia}>,<>}}}},{{<!!!>i!>},<!>!>!"<<!>a<!>o!!!>!!{!!!>!>,<>},{<!!!!!!!>e{e,a\'!>},<}"!!!>,<!>,<,}>}}},{{{{{{},{{}},{{},<!!!!eo!\'!>,<>}},{{<!!,oaa!a!!!!<\'u,!!!>},<{!!i!!uea!>},<!>},<>},{{{<"!>,<!a\'!>,<e!>a,"a>},{{{},<>},<!>!!!!>}},{{{}}},{{{<<e,\'!!e!!<\'a!>},<!>uo{o,!!!>!!<!!\'>}},{<iu{u"i\'>,{<!!,!>,<i\'\'{}!\'eo>}},{{{},{<!!!!a}>}}}}},{{<!>!!!>!!!>\'!>!!!>!!!>\'!>},<!!!>,<!!!>>}}},{{<!>},<a<\'!>,<!i\'o\'!>},<"!!i!>,<}!>},<}!!,!>!>},<>,<!>,<\'u!>,<aa!>,<a!!!>a!>},<i"!!!><,>},{{<!>},<!>,o!!!>!>},<!>},<ei>},{}}}},{{{{{<!>",!!!"iio!!<{\'}}!>,<>}},{{<u!>!!{\'\'!"!!!!!>,,>},{<!!!>uuoa\'!""!>,<!!eaa!!<!a!!!>>}},{<!a<!>,<>}},{{},{<<"!<!>},<eu!e<!>},<>}},{<"!!!>}ii<!>,<>}},{{{{<>}}},{{<!\'uo{!!io!>},<i!"!!!<<\',,!!!>iu!!!>>}}},{<i<<ao!!}!>!<!>},<e!!i,!>i!!!!{!">,{<,!<!!{,!>\'!!!>a!>},<u!!!>\'<!>,<!!!,u!>!!e>}}},{{{{{<e{!>o",>}}},{<!>},<a<!>},<!>,<,>,{}},{}},{{{<o>,<<!>},<!>,<!!!o!!,!,}u!!{>},{<{!>},<!!!>"\'>,<!!!>,uu!!eu<!>ueii>},{{<!"e\'!!u!>},<u!!!!!>{e<a<>},{{},{<>}},{{<!>\',!!}"i!!!!e!>!>,<,>},{<!!!!!!,>}}}}},{{{{<!>!}!!!!ui>,{}},{{<a!!!>!>!>!!!>iea"!"!!!>!u>}}},{},{<<!!!>,<!!!","!!!>!!}!>,<o,}a!!!!!>!>io>,{}}},{<u>,<!!!>!!!!!>{!>},<<"e!!eu!!!"!!eu>},{{<i!>!>},<{ii!>!!!>a!!!!i<<!>},<!>,<!!!>!>>},{<!!e!>,<!!!><a\'!!!>{\'\'ie!\'>}}}},{{{<!!<!>!!}}!!!!i"i!!o}!>>},{<!>},<a"!!!>i\'i!!!>},<<{u>}}}},{{{<!!!>"!!e!>}u>}}},{{{{},{}},<!!,>}},{{}}},{{},{}},{{{{<o!a!!!>!>!!,>},{{<<<!<oa>},{<o}!!!>!>},<!>},<>}}}},{{{<!>i>}},{<ea>,<!{<""<!!!>!!!>{a!i<u!>},<i!!!\'!}\',e>},{{<o,!!>},{{<o>}}}}}},{{<>},{<e!!!>!>},<<!!!>>,<!>},<"!<!>\'{"!!!>!\'<e!>o!!}!>,<>},{<"!>},<!!!>!o{a>,{}}}},{{{<u!i}\'i\'!!!>i!>\'a>}},{{<!>,<a}}""a,>,{<a!>,<o!!"iu!>,<\'""i!!!>!>!!}e{i>,<!>},<!>!!"!!!>"}<{!>},<}!oe!!!>\'i>}}}}},{{{{{{{},{<uu!!!<,}e!!!>>}},{{{{{<a!>},<o}a!!!>>}},<\'<\'!>a!!o{a}!!!>">},{{<}!>,<"!!!o{>},{<!>},<"ao!>,<!!"a!o!!!>!!!>!o!!!>a!!e,>}}},{{<>}},{<,e{>,{}}}},{{{<!!!}\'u!>!e!>,<<<>},<\'}o}!">},{{<\'<o!!!>a!>,<!!,"!>>},<!!!>},<!>!>},<<ue!!!!u!!!!!!ua!>},<!a>},{{{{{<!!{!>},<\'!>!!!>,<!>!!!>,<!!\'u!!i<o>,{<!!o!!,euua\'!>,<\'!>,<!!!>},<}>}},{<{!!!>!"!!{!>ao!>!>},<!!i>,{<!><"!>,<!!!>},<<o!"!!<aa!!!\'}u>}},{{<!>,<{,>},{<u!,!u!>},<!!"{>}}},{{<}!!!>},<e!!!!{,!!e!!!>},<!>,<,!!\',>}},{{<\'i!>},<!!<ua!>},<!>,<!!!!!!!>,<\'\'o<!!!!!>!!!e>,{{{},{{<>}}},<",>}},{{<ie!>!>,<eu<,!!!>,<!{!!!>},<!>},<{u!!i!>,<>,<!!ai!>,<o!!!>}!!u!u{!!!>ai!>,<"\'e!>},<>}},{<oe!>},<!!!>!,!!!>uau<e!!>,{<!>,<<{>}}}}},{}}},{{{<e<!>},<!o\'u>}},{<o"a""!>},<ae!!}!,!>,<>,<}<,}!u!>,<!!{!>"o,i{!!}>}},{{{<u!!!!!>,a!!!!!a<{e!!i!!<eu!>,<a>,{<!!!>>}},<>},{{<!>},<!><!!!>,<i!!}a!!<!!e{{!>},<e!!!>>},{}}}},{{{{{{<a!>},<o\'!!\'\'e"!!<!!!>!o>}},{{}}},{{}}},{},{{{<"<o>}}}},{<!>},<!>},<}}!>},<u!>},<o>,<!!!!!\'i!!\',}ea!<!>a!>!!>},{{<!>,<}u!>,<o!u!>,<o!>},<a!>,<!!!>,!!!><!>,<!>},<>}}},{{{<{!!ai!!<{o!!!!!!>},{{},<!>!!u{<e<!\'!!!>,<e!>,<,{"e!>},<">},{<!><i>,{}}},{{<,!>},<"e!!a<!!a!>},<!>},<""!!!!>,{{<\'u<<!>o!>,<\'>},<\'{i\'!!"!>,<!o!!!>ue}<}a!!!!>}}}}},{},{{{{{{<e!!}i!>},<oi!>},<"!>,<!!!>eua>},<{!!!>}>}}}},{{{<!>,<,,u!!!>ue<!!!!}!>,<{{>},{}},{{}}},{{{{<\'!!!!o{!>},<,\'!>,<,"oe!>},<u!>},<!!o!!}!!i>}}},{{<{!>,<e<e!{\'<!>,<!,o!!{!!{>,{{},{}}},{{<a,<o<!!!>!>,<!{!!!!!>!>},<<ui!!!>{{!>,<!!\'>,{<!!!>ia"!!}!>,<!{>}}}},{{{},<!!ee,!!!u!!!>},<!>{!>,<a!!}!>!>!i!>},<}!>,<!!\'>},{<!\'>,{}},{{<!>},<!>!""{ei!!}e!>,<!>,<!!!!"u!\'!!!a!>,<!>},<<>},<\'!>,<!e<\'<oe!!!>a!">}}},{{<u!!!>,!>,<!!ea>,{<"!!"e{,!>e!!!!uei!!!>!!!>!!!!!>!>,<a!!eo>}},{{{{},{{<ie!>},<!>},<oeu}!!!>i\'!u!>},<>},{<,!>!>ea!<!>},<e!!{!,!>e>}}},{{{<>}},{{<!\'o!>u!!e!>},<a!!!>!!u!!!>},<,!>,<,i!!!>,<!>a>}}},{{<!>},<<a<e\'>}}},{}},{<u!!!>u!!!>},<!>,<!!!!!!<u!>,<!!!,!!"!!!!!>!>},<!!!>>,<{e!>{{!!!>!>i!>u!"<!!o!!!>"!>,<\'u<>}}},{{{{},{}},{{{<!>,<o!!{!!!>u!!!>!>,<>,{}},{<!>!>},<a\'}ou!!\'!>},<!!io>}},{{<!!!><i!!!>\'>},{<\'!!e<{"!!}{o>}}},{{{{<!>}!>!!!}\'!!}!>!>},<e,!!}!!e!o!!!!!>!ea>}},{{<u!>,<<!!!>!!!>i<>},<!!o"u{>},{<!!\'>,{}}},{{{<<u!!!>!!}!!!!!>,<a!!u"!>},<!aae!e>},<\'!!!>!!!>,<"oa"!>},<!!,<!!!>io}!>!!>},{{{{<!>i<!!u"!!ie!>,<,!>!!\'a!>},<u!>>},{<u<ea}!>},<!,e<{e!!!>>}},{{<i!>,<!!!>,<!!!>!!!>,<!>},<\'!>,<a!!!>!>,<}!>,<<>}},{{{<ou!!{!!""{!!!>!!<!!,"eu<!\'\'!!ei!>},<>},{<!!!>>}},{<i!!!!!><<!>,<!,!!e!>!>},<>}}},{},{{},<{!!!>iao!>e,"o!!!>!!!!!!u!>,<o!"!<,>}},{{<!!}!>,<iei!!o>,<!>,<!!!>o!!{,i!!!>!!!!a!!!>},<,!!"o>},{{{}},{<"!!!!!!\'u",!>uui!ai!!\'>},{{<!,i!>,{">},{<<>}}}}},{{{},<>},{{{<}\'!>,<iu\',<>,{{{<\'!>},<!!,!>!!!>!!<"{!!!!"a!o<!a">},<a{<!!>},<>}},{{<o}"\'o!>},<!!{!!!>{>},{<ua!aeu!>},<}!!!>i{u!!!!!>!>!!>}}},{}}},{{{{<ee<!!!>!<!!o>}}},{{{<ie<!>,<!!i!!i}a<\'i"{{\'e!i>,<,!!"!>},<!!!>!>},<,!>,<,{!!!>o"<}!!<"!\'>}}},{{}}}}},{{<"!u>}},{{{{<i!>!!!>!!!>!!!>>},{{<}<<!>},<!!!>!"a!!o>},{}}},{{{{<!!!>>}},<ea!>,<{u!<{!>,<"}!!!!!!!>"i!!">},<!!!>,<>},{<!>,<a!>,<!>,<a{>,{<!>,<!o!>!!{!>},<!!!>!!u,,!\',!>,<e\'>}}},{{{{<>}},{{{<!!!>},<}!!!!!!!!o!><}!!!!!>,<,,!!oi!>,<!!e>}}}}},{{{<<!<!!,!>!!!>,<>},<!<i!!e!!!o!>},<a!!!!!>aoi!>,<>},{<!><>,{<!>,<ia!!{!!!!!!}!>},<oi!>!>a}}ua!>},<>}}}}},{{{{{<uu!!!!!!!>}{!!!!!>i{!>},<e!>,<a>},{<!!\'<!>},<!>},<>,{}}},{<ei{}e}!!u!!!>,<}!!!><!>u,}>},{{<,!>,<<!!iiou<!>},<{>},<u!!!!!>{}!>!!!>a!>,<>}}},{{{{{{},{<!>},<"!!}io!!i}{iu!>>}},{{{{{<ee!>,<a!!!>{,"!!!!e!!uio!!!>{!!!!>},<!>{!>oe!!!e!>},<i\'e!\'!!i!!\'u"!>,<}!i!>>},<{"{ue\'\'{i>},{{<o>},{<!><o!>},<}!>i!>},<!!!u!>,<}!>!>},<oaoi>}}},<!!i>},{{<oa!>},<!!!>}{!>},<i!!a,}!>},<}!!!>"o!!!>>,<<!>},<!>},<!!!>\'!>e}!>,<>},{{},<i!!">}}},{{}},{{<a!!"<a>},{{<!>},<<!!!>e!><ua<,!>},<}!>},<!!!>!>,<\'}>}},{<!>},<!>!,{a{!!"!!!>!!\'!o<e!!!!ee"!!}<>}}}},{{{<i{,"ai!>!>},<u\'i!!>,<!!!!"!!!!}o!!!>!oue}"!!!>},<{!>{!!{>}},{<!>,<{!!!>},<!!!>!>,<!!!>},<,<}!>\'!a>,{<!>},<u!!a{!!!>!>},<a!\'!!a!!io!>},<!>,<<>}},{{<!}e<o!>!}>}}},{{{}},{{{{}},<{\'""a!>o!!!>\'!>\'!>},<>}}},{{{<!!!!!>!{>}},{{{<ia!>}i<!>,<a!!}>},<!!!>u!>>}},{{<>}}}},{{},{{{},<a!>,<!>!!!>},<!!\'!euu,o{!!!>!><\'>},{<!ua!,oe\'e!ie!>,<!!!>!>},<!!\'!!!>a!>},<!e>,<!>,<!!\'!>,<"}!!\'ou\'>}},{{<uo!!o!!"!>,<,>,{}},<u"}!!au!!!!!>o!>},<}!>,<a,}>}},{{{{},{<!>,o\'u!!!>},<"i{a!>,<o>}}},{{{<,i!o}u!!!>!!!!!>}>},<{u!!\'!!{e<o>}},{{<}!>,<!!!!">}}}}},{{{{<<a!>,<!!!>">},<"{"!!<!{a<<!!o!>,<"o!>,<ii!!o!>},<ae>},{{<a"!>!>ui,e!e!!!><{o<">,{}}}},{{{{<i!!!>!>i<<!!!><!>!!!!!>,<ui}>}},{{},{{{<!!!>!!!!!>>}},{<e!!"!!{"<!!!>!!a!!ai!"{ou!><!!!!>}},{<{!!!>!>},<!!!!!!!!e!>u,u!!>}},{{{},{}},{{<>,{<<!!!>!!!i!>u!!!>,<>,{<!!!>a!>,<,{!!{e!!!!!>i!!!>,<!!!>,<\'!\'>}}}}}},{{{<<<o!>},<"iu!!ai>},{{{{<{,>}}}}},{{{{{{{<e!!a!!!>,<!u\'io!!!>e!!}!!"!\',!>,!>>},{<\'!o\'o}!>,<>}},<!!!>}!u!>,<o!!\'!!u!uau,!!!>},<o!!">},{}},{<!>,<u!>"a!>},<!e<\'e<"o!>,<!"i{u>}},{{<ao!!!!u!!!>>}}},{<,u>,<e"!><!!!>\'o,\'o>},{{{{},{<"!>},<aa<>}},{<,u!!!!!>,<!!!>oi!uo!e!!e!>!>!!}>,<!{oea!!!!!!!>!!!>!>,<!!!>!>},<>}}}}},{{},{{<>},<!!!!!\',!!",iua{\'!!!>},<!u!!!!o!o>}},{{{{{{{<{!!!>!>,<!!ao"!>,<!!!>\'!>},<!\'oe!!}}!>,<u>},{}},<i!!,"!>>},<>},{{<!<ua!!!>,<!\'"!>o>},{<eo!!<!!!\'<!!!>}a>,{<\'a\'\'ui\'!a!!}}\'>}}},{{<o!>,<!>>}}},{{{{<e\'\'<!>,<!>},<!{,,>},{{<e,o{e}o,o,e,!!!!>}}}}}},{{<!!i{!!!!oa>},<au!>},<!>!>!!!>,<!>e!>,<!!!>},<o!>},<!!o>},{{<"!>},<!!a!!}<\'!!o!!"!!{<{{<!!!>i>,<!!au}o!!\'}o}}ou>},{<!!ei!!!>e<!>e!!!>,<a,!!oi>},{{{<!\'!>!!!!!!i!!}!\'!!!>},<!!!>,<!!!>i{}!!!>,<!!{!>},<a>},{{{<!!!>,!}!>i<>},{<"i,!>,<o"!!!>>}}}},{<}{o>}}}}},{},{{<}o!},}!>,<}u>,<<}<,<!!u!>,<iii>},{{},{{<o!>},<!!!>\'e{!>},<">},{<!>a!!!>{\'!!{\'u,>}}}}},{{{{<!!!>!>},<o!>\'ii!!!!aa!!,a!>},<\'!oio!!!>>},{}},{{},{}}},{{{{<"io,"\'!>,<o}>},{{<!>!!,!!!>},<"!!i}!!!>,<\'<i!>>},<!>},<>}},{<!!!>!,!!!>\'!>},<\'\'!>},<o{\'!>"<>,<!!!ea"!!ioi!!\'"}\'{>}}}},{{{{},{<!!,io!>!>},<!>,!!!>!i!>,<u!!!!!}a!"!!!>,<>}},{}},{{{},{{<i!>},<oeu!>},<}!!!!"!!!>!!<!"!>},<"\'!>},<>}}},{<!!u\'!>},<!!ui!!!>}>,{{{},<!>!>},<>}}},{{{<!!!>\'o!!!i,e}!!!!!>a,!!\'>}}}}}},{{{},{{{<!!!\'i!!!!!><!>!!!>e>},{<!>!!!!u>}},{{}}},{{{{<\'!>\'i\'!>},<!"\'a!!o!!!>!>,<}!>,<<!>,<!!!!!ue>}},<!>o!!!>,<a!!u"\'!!"ao!,o\'!!!>!,<!"\'>},{},{{<!!!>},<o!},\'o!!!>!!!>>}}}},{{},{{<>,{{<!u!>},<!!!>!o!>,<<,u<\'oo,!>},<!!!>ea\'<>},{<!!!>!!!>!!!!}!!!>},<!!!>a,o\'o<!>>}}}},{{<u"!!!>>,{<!>,<!>!>!>,<u!>>}},{<{o!!\'>}},{{},{{}}}}},{{{{<>},{<!>,<!!"e!!}a!>},<>},{{},<i}i!>,\'}!!!!e!!u!!\'!>>}},{{{<!>},<!!!!i{!>},<!!!>!!i,\'oi\'">}}},{{{{<,{u!!<a\',!!!>{!>}}!>},<!a,>},{<!}!><>}},{{{<!>o\'!!!>,!!<!>,<!!a"}e},!>i!>,<!!!!>},{<e!!}a!>a!i"!!!!!>u!!a\'>}},{{<!!!!!>},<!>u!!>,{<!!!!o>}},{}},{{{}}}},{{{<e!>},<!!i!>!!!>!>,<ae!>,<>},{{{<u!!u{!!!>},<!>\'!>},<!!!>\'\'{!>"e!>},<!!!>{<>}},<i}>}}}},{{<"!!!\'o!>o<i\'e>,{<!u>}},{{{{{},{}},{<i}>}},<o<}{}aa!>},<eae,!>!<e>},{<\'!>,<u!!,u!!}!!<>},{<!!!>,<!!!!!!!>!!!>e<<ao!!o\'a!!{{!>,<!!>,{{}}}}},{{<o}<!!a\'!u!!!>!>},<e\'}!!\'"u\'\'!!!>>},{{<i!>e!!!>u"}!>,<!>eou{io!!!>,<>,{}},{{<a!!<!u!>!!!!!<!>},<!!!!<{oa"!>,<!}}">}}},{<{<}!>"<{!>,<!!!>!>!>,<!>,<}eei{"a>}}},{{{{},{<!!!>!!!><!"!!e!>},<,,>}},<u!!!>ia<i!!!>{a{!!!>u!<ae!>},<<>},{{},{{{<!>,<!!oa>,<e!!}!!i>},<!>,io!>!}!>},<!!{!>},<>},{{<\'uuu<!{{>}}}},{{},{<!>,<e!e!{!u!>},<\'!>u!}>}}}},{{{{{<"!>},<o\'<,!e\'u},"!!!>!!,>,{}},{{<{!>},<u!"!!!!!>o"!!{!!<\'>},{<!>ui"!!!!!>!!iu!>},<">}},{<o,ae!!!!}!!ii!iuueo!!",i!ou>,<!!"!>},<aa!!!>},<o<au<!>,<ie!>},<>}},{<!!oi!>!!,!{!>,<o!!!>oe!!!>!u!!,!!aa!!}u>,<!>!>},<!!"<!>},<u\'!!!>},<!!!!!>,<>},{{{},{}},{<!!!>},<i!eea\'!!!>,<>}}},{{<>}}},{{{{<a!!!!u{!!!>>}},<}!!!!!>},<}{{ua!!u{<"<"!!!>>},{{<!!!>!>,!>e!!!>,<!>!!}!!!!o!!!><\'!"}!>\'<>,<e!>},<!!>},<{!>},<,<,!!u!oe,"!!a!!!!!!i>},{<{,!!!>"<\'i,!!!!\'!!,<!>,<"o!!<!!,!i">,{}}},{{},{{},{<eue!>!{<!!e},i!>},<>,{{<ai!!!>i>},{<!,>}}}}},{{<!>},<\'u>},{<!>iu\'!>},<!>!!"!>,<,o!>},<\'}}oe>}}}}}}'));