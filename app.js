'use strict';

/* ══════════════════════════════════════════════════════════════
   UNIVERSITY DATA  (27 universities from Sohail's PDF research)
══════════════════════════════════════════════════════════════ */
const UNI_DB = [
  {
    id:'oth-regensburg', name:'OTH Regensburg', city:'Regensburg', state:'Bavaria',
    program:'International Computer Science', degree:'B.Sc.', language:'English',
    appOpens:'2026-05-01', deadline:'2026-07-15', portal:'Direct', tuition:'€500/sem (Non-EU)',
    ielts:'5.0', germanReq:'A2(tentative)', restriction:'NC (numerus clausus)',
    vpd:true, matchScore:'95%', priorityKey:'top', priority:'⭐ Best Pick',
    notes:'EXCELLENT match. Public uni. Good acceptance rate. Practical CS focus. Very international student body. Accept VPD from other universities.',
    strategy:'Apply FIRST in May. Your profile is very competitive here.',
    special:'CV required. German language class offered on campus — A2 might be required this year.',
    email:'zulassung@oth-regensburg.de',
    link:'https://www.oth-regensburg.de/en/study-programme/study-international-computer-science-bachelor',
    livingCost: 900
  },
  {
    id:'fau-ai', name:'FAU Erlangen-Nürnberg', city:'Erlangen', state:'Bavaria',
    program:'Artificial Intelligence', degree:'B.Sc.', language:'English',
    appOpens:'2026-04-15', deadline:'2026-07-15', portal:'Direct', tuition:'72€/sem (Non-EU)',
    ielts:'6.0', germanReq:'No', restriction:'NO NC (open admission)',
    vpd:false, matchScore:'90%', priorityKey:'top', priority:'⭐ Top Pick',
    notes:'TOP PROGRAM. Public, zero tuition, no NC restriction. One of Germany\'s strongest AI faculties.',
    strategy:'Apply early May. Math test is manageable with 2–3 weeks prep.',
    special:'Math & Problem-solving skills test required before admission.',
    email:'zulassungsstelle@fau.de',
    link:'https://www.fau.eu/degree-program/artificialintelligence-b-sc',
    livingCost: 850
  },
  {
    id:'fau-autonomy', name:'FAU Erlangen-Nürnberg', city:'Erlangen', state:'Bavaria',
    program:'Autonomy Technologies', degree:'B.Sc.', language:'English',
    appOpens:'2026-04-13', deadline:'2026-07-15', portal:'Direct', tuition:'72€/sem (Non-EU)',
    ielts:'6.0', germanReq:'Not Required', restriction:'NO NC (open admission)',
    vpd:false, matchScore:'90%', priorityKey:'top', priority:'⭐ Top Pick',
    notes:'ROBOTICS/AI focus. Public, free tuition, no restrictions. Industry project in every semester.',
    strategy:'Apply both FAU programs simultaneously — same portal, same documents.',
    special:'Admission test: Math, Physics, CS, and English skills assessment.',
    email:'zulassungsstelle@fau.de',
    link:'https://www.fau.eu/degree-program/autonomy-technologies-b-sc/',
    livingCost: 850
  },
  {
    id:'th-rosenheim', name:'TH Rosenheim', city:'Rosenheim', state:'Bavaria',
    program:'Applied Artificial Intelligence', degree:'B.Sc.', language:'English',
    appOpens:'2026-04-15', deadline:'2026-07-15', portal:'Uni-Assist', tuition:'€500/sem (Non-EU)',
    ielts:'6.0', germanReq:'A2 Required', restriction:'No NC (open)',
    vpd:false, matchScore:'90%', priorityKey:'top', priority:'⭐ Top Pick',
    notes:'STRONG PROGRAM. Near Munich. Practical AI with 18-week industry internship. Excellent job placement.',
    strategy:'Submit via Uni-Assist by early May.',
    special:'A2 German required for admission. 18-week internship in semester 5.',
    email:'international.office@th-rosenheim.de',
    link:'https://www.th-rosenheim.de/en/studies-and-further-education/courses-of-study/bachelors-degree-programmes/applied-artificial-intelligence',
    livingCost: 950
  },
  {
    id:'saarland', name:'Saarland University', city:'Saarbrücken', state:'Saarland',
    program:'Computer Science', degree:'B.Sc.', language:'English',
    appOpens:'2026-05-01', deadline:'2026-07-15', portal:'Direct', tuition:'€302/sem',
    ielts:'6.5', germanReq:'B2 (6.5 IELTS)', restriction:'NC',
    vpd:false, matchScore:'75%', priorityKey:'competitive', priority:'🎯 Competitive',
    notes:'TOP CHOICE — Rare English-taught CS bachelor at a German public university. Also has Cybersecurity track.',
    strategy:'Very competitive. Apply in June. Prepare for the on-site aptitude test.',
    special:'SAT score / Olympiad results / Interview (on-site) + Aptitude test all required.',
    email:'studium@uni-saarland.de',
    link:'https://www.uni-saarland.de/en/study/programmes/bachelor/computer-science.html',
    livingCost: 800
  },
  {
    id:'th-aschaffenburg', name:'TH Aschaffenburg', city:'Aschaffenburg', state:'Bavaria',
    program:'Software Design International', degree:'B.Sc.', language:'English',
    appOpens:'2026-05-02', deadline:'2026-05-31', portal:'Direct', tuition:'70€/sem (Non-EU)',
    ielts:'5.5', germanReq:'A1 (at enrollment, not admission)', restriction:'No NC (open)',
    vpd:true, matchScore:'85%', priorityKey:'early', priority:'⚡ Apply Early!',
    notes:'Public, free tuition, software engineering focus. Very short window — May 2 to May 31 only! Does not Accept VPD from other universities',
    strategy:'SHORT DEADLINE. Prepare all docs now and submit by May 10 to be safe.',
    special:'German A1 certificate needed at enrollment — not required for the application itself.',
    email:'international@th-ab.de',
    link:'https://www.th-ab.de/en/education/degree-programmes/software-design-international-bsc/',
    livingCost: 800
  },
  {
    id:'haw-hamburg', name:'HAW Hamburg', city:'Hamburg', state:'Hamburg',
    program:'Information Engineering', degree:'B.Sc.', language:'English',
    appOpens:'2026-04-01', deadline:'2026-05-31', portal:'Direct', tuition:'380€/sem (Non-EU)',
    ielts:'6.0', germanReq:'Not Required', restriction:'NC',
    vpd:true, matchScore:'85%', priorityKey:'early', priority:'⚡ Apply Mid-May',
    notes:'Public, Hamburg city location. Competitive NC program. Strong engineering faculty with industry connections.Does not Accept VPD from other universities',
    strategy:'Apply mid-May. Big city = better internships + lifestyle + career after graduation.',
    special:'CV + Cover Letter required alongside standard documents.',
    email:'international@haw-hamburg.de',
    link:'https://www.haw-hamburg.de/en/bachelor-information-engineering/',
    livingCost: 1100
  },
  {
    id:'th-deggendorf', name:'TH Deggendorf', city:'Deggendorf', state:'Bavaria',
    program:'Artificial Intelligence', degree:'B.Sc.', language:'English',
    appOpens:'2026-04-15', deadline:'2026-06-15', portal:'Direct', tuition:'582€/sem (Non-EU)',
    ielts:'6.5', germanReq:'A2 (after studies)', restriction:'No NC (open)',
    vpd:false, matchScore:'80%', priorityKey:'good', priority:'👍 Good Option',
    notes:'Public, free tuition, AI-focused. Early deadline June 15. Practical program with modern facilities.',
    strategy:'Earlier than most — prepare online assessment by end of May.',
    special:'Written online assessment test is mandatory for admission.',
    email:'international@th-deg.de',
    link:'https://th-deg.de/ain-b-en',
    livingCost: 750
  },
  {
    id:'th-ingolstadt', name:'TH Ingolstadt', city:'Ingolstadt', state:'Bavaria',
    program:'Computer Science & AI', degree:'B.Sc.', language:'English',
    appOpens:'2026-05-02', deadline:'2026-07-15', portal:'Direct', tuition:'€872/sem (Non-EU)',
    ielts:'6.0', germanReq:'A1 (after 1st semester)', restriction:' NO NC',
    vpd:true, matchScore:'75%', priorityKey:'good', priority:'👍 Good Option',
    notes:'Public. Near Munich. Combined CS + AI curriculum. Higher non-EU fees but strong quality program.Does not Accept VPD from other universities',
    strategy:'VPD must be submitted by May 30 — separate from main deadline. Do not miss!',
    special:'VPD via Uni-Assist required by May 30. Proof of secondary education required.',
    email:'international@thi.de',
    link:'https://www.thi.de/en/computer-science/degree-programmes/computer-science-and-artificial-intelligence-bsc/',
    livingCost: 900
  },
  {
    id:'ovgu-magdeburg', name:'OVGU Magdeburg', city:'Magdeburg', state:'Saxony-Anhalt',
    program:'Bilingual Computer Science', degree:'B.Sc.', language:'Bilingual (EN/DE)',
    appOpens:'2026-04-15', deadline:'2026-07-15', portal:'Uni-Assist', tuition:'311€/sem (Non-EU)',
    ielts:'5.5', germanReq:'A1 → B1 during studies', restriction:'No NC (open)',
    vpd:false, matchScore:'85%', priorityKey:'backup', priority:'✅ Good Backup',
    notes:'Learn German naturally while studying CS. Eastern Germany = very affordable (€700–850/month living).',
    strategy:'Great safety option. Very low living costs. Mandatory German course is included — free!',
    special:'Mandatory German language course to B1 level included in the curriculum.',
    email:'international@ovgu.de',
    link:'https://www.ovgu.de/unimagdeburg/en/Study/',
    livingCost: 780
  },
  {
    id:'tu-chemnitz', name:'TU Chemnitz', city:'Chemnitz', state:'Saxony',
    program:'Foundation in Data Science', degree:'B.Sc.', language:'English',
    appOpens:'2026-04-01', deadline:'2026-07-15', portal:'Uni-Assist', tuition:'329€/sem (Non-EU)',
    ielts:'5.5', germanReq:'Not Required', restriction:'No NC (open)',
    vpd:false, matchScore:'85%', priorityKey:'safety', priority:'🛡 Safety Option',
    notes:'Cheapest city in Germany — living costs €700–900/month. Foundation program = slightly easier entry.',
    strategy:'Best safety net. Lowest living cost in Germany. Apply via Uni-Assist alongside others.',
    special:'Mandatory German language course to B1 during studies (free, campus-based).',
    email:'international@tu-chemnitz.de',
    link:'https://www.tu-chemnitz.de/mathematik/fids/#general',
    livingCost: 750
  },
  {
    id:'th-augsburg', name:'TH Augsburg', city:'Augsburg', state:'Bavaria',
    program:'International Information Systems', degree:'B.Sc.', language:'English',
    appOpens:'2026-05-02', deadline:'2026-07-15', portal:'Uni-Assist', tuition:'177€/sem (Non-EU)',
    ielts:'6.0', germanReq:'A2 (optional)', restriction:'No NC (open)',
    vpd:true, matchScore:'75%', priorityKey:'good', priority:'👍 Good Option',
    notes:'Public, free tuition. Info systems + management focus. Near Munich. Flexible language requirements. Accept VPD from other universities in Bayern',
    strategy:'Apply June via Uni-Assist. Download aptitude test sample questions early.',
    special:'Aptitude test required as part of the admission evaluation process.',
    email:'international@hs-augsburg.de',
    link:'https://www.tha.de/en/Computer-Science/International-Information-Systems-BSc.html',
    livingCost: 900
  },
  {
    id:'uni-passau', name:'University of Passau', city:'Passau', state:'Bavaria',
    program:'Artificial Intelligence', degree:'B.Sc.', language:'English',
    appOpens:'2026-04-07', deadline:'2026-07-15', portal:'Direct', tuition:'78€/sem (Non-EU)',
    ielts:'6.5', germanReq:'Not Required', restriction:'No NC (open)',
    vpd:false, matchScore:'75%', priorityKey:'good', priority:'👍 Good Option',
    notes:'Public. AI-specialized degree. Beautiful medieval city on the Austrian border. Strong academic reputation.',
    strategy:'Prepare SAT early. Small city = tight-knit student community and lower living costs.',
    special:'CV + SAT score required for admission. No German needed.',
    email:'international@uni-passau.de',
    link:'https://www.uni-passau.de/en/bsc-artificial-intelligence',
    livingCost: 780
  },
  {
    id:'tum', name:'TU Munich (TUM)', city:'Heilbronn', state:'Baden-Württemberg',
    program:'Management & Data Science', degree:'B.Sc.', language:'English',
    appOpens:'2026-05-15', deadline:'2026-07-15', portal:'TUMonline (direct)', tuition:'€97/sem',
    ielts:'6.5', germanReq:'B2 (IELTS 6.5+)', restriction:'NC (very competitive)',
    vpd:true, matchScore:'60%', priorityKey:'reach', priority:'🎯 Reach School',
    notes:'GLOBALLY TOP RANKED. Management + Data Science combo. Very competitive.Does not Accept VPD from other universities',
    strategy:'Reach school — apply and hope for the best. A TUM offer would be life-changing.',
    special:'A-Levels equivalent, VPD, Letter of Motivation, CV, Passport. Aptitude assessment included.',
    email:'admission@tum.de',
    link:'https://www.tum.de/studium/studienangebot/detail/management-and-data-science',
    livingCost: 850
  },
  {
    id:'htw-berlin', name:'HTW Berlin', city:'Berlin', state:'Berlin',
    program:'Cyber Security & Business', degree:'B.Sc.', language:'English',
    appOpens:'2026-04-01', deadline:'2026-06-30', portal:'Uni-Assist', tuition:'€350/sem',
    ielts:'7.0', germanReq:'Not Required', restriction:'NC',
    vpd:true, matchScore:'70%', priorityKey:'competitive', priority:'🎯 Competitive',
    notes:'Berlin location! Cybersecurity + Business unique combo. Excellent career prospects in Berlin tech sector.',
    strategy:'IELTS 7.0 is the barrier. Worth retaking if you can reach it — Berlin location pays off.',
    special:'Register on Hochschulstart.de FIRST, then apply via Uni-Assist. CV + Letter of Motivation needed.',
    email:'international@htw-berlin.de',
    link:'https://cyber-security-business.htw-berlin.de/',
    livingCost: 1150
  },
  {
    id:'rhine-waal', name:'Rhine-Waal University', city:'Kleve', state:'NRW',
    program:'Infotronics System Engineering', degree:'B.Sc.', language:'English',
    appOpens:'2026-05-01', deadline:'2026-07-15', portal:'Uni-Assist', tuition:'347€/sem (Non-EU)',
    ielts:'6.5', germanReq:'Not Required', restriction:'No NC (open)',
    vpd:false, matchScore:'75%', priorityKey:'good', priority:'👍 Good Option',
    notes:'Public, free tuition. Engineering + IT blend. Near Netherlands border. Very international campus.',
    strategy:'Good option. Apply via Uni-Assist. Near Netherlands = some Dutch culture + career access.',
    special:'No special requirements beyond standard documents.',
    email:'international@hochschule-rhein-waal.de',
    link:'https://www.hochschule-rhein-waal.de',
    livingCost: 820
  },
  {
    id:'hshl', name:'HS Hamm-Lippstadt', city:'Hamm', state:'NRW',
    program:'Electronic Engineering', degree:'B.Sc.', language:'English',
    appOpens:null, deadline:'2026-07-15', portal:'Direct', tuition:'334€/sem (Non-EU)',
    ielts:'6.0', germanReq:'Not Required', restriction:'No NC (open)',
    vpd:true, matchScore:'80%', priorityKey:'safety', priority:'🛡 Safety Option',
    notes:'Public, free tuition. Engineering with tech focus. Good facilities. Accept VPD from other universities',
    strategy:'You have this offer already. Keep it open as fallback while chasing top choices.',
    special:'No special requirements.',
    email:'international@hshl.de',
    link:'https://www.hshl.de/',
    livingCost: 780
  },
  {
    id:'fh-suedwestfalen', name:'FH Südwestfalen', city:'Meschede', state:'NRW',
    program:'Business Admin with Informatics', degree:'B.A.', language:'English',
    appOpens:'2026-03-01', deadline:'2026-07-15', portal:'Uni-Assist', tuition:'321€/sem (Non-EU)',
    ielts:'6.5', germanReq:'Not Required', restriction:'No NC (open)',
    vpd:false, matchScore:'70%', priorityKey:'good', priority:'👍 Good Option',
    notes:'Public, free. Business + IT combo. Smaller city = very affordable (€700/month). Practical career focus.',
    strategy:'Good for business-tech career path. Cheapest living in NRW state.',
    special:'No special requirements.',
    email:'international@fh-swf.de',
    link:'https://www.fh-swf.de',
    livingCost: 700
  },
  {
    id:'hs-heilbronn', name:'HS Heilbronn', city:'Heilbronn', state:'Baden-Württemberg',
    program:'Intelligent Mechatronic Systems', degree:'B.Sc.', language:'English',
    appOpens:null, deadline:'2026-09-30', portal:'Direct', tuition:'€1,500/sem (BW non-EU)',
    ielts:'6.0', germanReq:'Not Required', restriction:'No NC (open)',
    vpd:false, matchScore:'65%', priorityKey:'good', priority:'👍 Late Option',
    notes:'Public. Late Sep deadline — useful if main round fails. Mechatronics + AI combo. BW state fees apply.',
    strategy:'Good late-round fallback after main July 15 results. Mechatronics = strong job market.',
    special:'Studienkolleg Konstanz recognition required for non-German secondary certificates.',
    email:'international@hs-heilbronn.de',
    link:'https://www.hs-heilbronn.de/en/intelligent-mechatronic-systems',
    livingCost: 850
  },
  {
    id:'th-ulm', name:'TH Ulm', city:'Ulm', state:'Baden-Württemberg',
    program:'Computer Science', degree:'B.Sc.', language:'English',
    appOpens:'2026-04-15', deadline:'2026-07-15', portal:'Direct', tuition:'€1,500/sem (BW non-EU)',
    ielts:'6.0', germanReq:'B1 (helpful, not mandatory)', restriction:'No NC (open)',
    vpd:false, matchScore:'70%', priorityKey:'good', priority:'👍 Good Option',
    notes:'Public. Higher BW state fees for non-EU. Studienkolleg Konstanz degree validation needed.',
    strategy:'Factor BW fees into budget (€3,000/yr extra). Good CS program quality otherwise.',
    special:'Document validation by Studienkolleg Konstanz required for Pakistani degree equivalency.',
    email:'international@thu.de',
    link:'https://www.thu.de/en/Pages/Studiengang_CTS.aspx',
    livingCost: 850
  },
  {
    id:'hs-mittweida', name:'HS Mittweida', city:'Mittweida', state:'Saxony',
    program:'Applied Mathematics', degree:'B.Sc.', language:'English',
    appOpens:null, deadline:'2026-05-15', portal:'Direct', tuition:'107€/sem (Non-EU)',
    ielts:'6.0', germanReq:'Not Required', restriction:'No NC (open)',
    vpd:false, matchScore:'85%', priorityKey:'safety', priority:'✅ good option',
    notes:'Good mathematical foundation for AI/ML careers. Already admitted — keep as backup.',
    strategy:'Have this offer. Only decline if a better public uni comes through.',
    special:'Already applied and received admission offer.',
    email:'international@hs-mittweida.de',
    link:'https://www.hs-mittweida.de/',
    livingCost: 700
  },
  {
    id:'ku-eichstaett', name:'Catholic Uni Eichstätt', city:'Eichstätt', state:'Bavaria',
    program:'Data Science', degree:'B.Sc.', language:'English',
    appOpens:'2026-04-01', deadline:'2026-07-15', portal:'Direct', tuition:'Free (No Tuition)',
    ielts:'6.0', germanReq:'A2 (after 1st year)', restriction:'No NC (open)',
    vpd:false, matchScore:'70%', priorityKey:'good', priority:'👍 Good Option',
    notes:'Small, charming university. Data Science focus.',
    special:'A2 German certificate needed after first year of study.',
    email:'international@ku.de',
    link:'https://www.ku.de/en/study-offer/data-science',
    livingCost: 780
  },
  {
    id:'constructor', name:'Constructor University', city:'Bremen', state:'Bremen',
    program:'Computer Science', degree:'B.Sc.', language:'English',
    appOpens:'2026-01-01', deadline:'2026-12-31', portal:'Direct (rolling)', tuition:'€20,000/yr',
    ielts:'6.5', germanReq:'Not Required', restriction:'No NC (open)',
    vpd:false, matchScore:'60%', priorityKey:'private', priority:'💼 Private',
    notes:'PRIVATE — High fees but scholarships available. Fully English campus. Very international environment.',
    strategy:'Only if all public options fail. Always apply for scholarship — they have generous aid.',
    special:'Rolling admission. Apply early for maximum scholarship consideration.',
    email:'admissions@constructor.university',
    link:'https://constructor.university/programs/undergraduate-education/computer-science',
    livingCost: 1000
  },
  {
    id:'code-berlin', name:'CODE University Berlin', city:'Berlin', state:'Berlin',
    program:'Software Engineering', degree:'B.Sc.', language:'English',
    appOpens:'2026-01-01', deadline:'2026-12-31', portal:'Direct (rolling)', tuition:'€10,000/yr',
    ielts:'6.0', germanReq:'Not Required', restriction:'No NC (open)',
    vpd:false, matchScore:'65%', priorityKey:'private', priority:'💼 Private',
    notes:'PRIVATE — Modern project-based learning. Berlin tech startup ecosystem. Practical SE focus.',
    strategy:'Better value than Constructor. Berlin location = enormous career advantage after graduation.',
    special:'Portfolio of programming projects strengthens application significantly.',
    email:'admissions@code.berlin',
    link:'https://code.berlin/en/study/bachelor/software-engineering/',
    livingCost: 1150
  },
  {
    id:'iu-international', name:'IU International University', city:'Berlin/Online', state:'Germany',
    program:'Computer Science — Data Science Track', degree:'B.Sc.', language:'English',
    appOpens:null, deadline:'2026-12-31', portal:'Direct (rolling)', tuition:'€299/month',
    ielts:'6.0', germanReq:'Not Required', restriction:'No NC (open)',
    vpd:false, matchScore:'55%', priorityKey:'last', priority:'🔄 Last Resort',
    notes:'PRIVATE — Flexible online/hybrid option. Recognized degree. Monthly payment model.',
    strategy:'Use only if all other options fail. Monthly fees accumulate to ~€10,800/yr.',
    special:'Rolling admission. Online or hybrid study mode available.',
    email:'info@iu.de',
    link:'https://www.iu.de/bachelor/computer-science/fernstudium/',
    livingCost: 1000
  },
  {
    id:'berlin-intl', name:'Berlin International Uni', city:'Berlin', state:'Berlin',
    program:'Data Science & Business', degree:'B.A.', language:'English',
    appOpens:null, deadline:'2026-12-31', portal:'Direct (rolling)', tuition:'€8,000/yr',
    ielts:'6.0', germanReq:'Not Required', restriction:'No NC (open)',
    vpd:false, matchScore:'55%', priorityKey:'last', priority:'🔄 Last Resort',
    notes:'PRIVATE — Business + Tech blend. Berlin location. Rolling admission. Good Berlin network.',
    strategy:'Only if public options all fail. Berlin location partially compensates for private status.',
    special:'Business-focused curriculum. Rolling admission.',
    email:'admissions@berlin-international.de',
    link:'https://www.berlin-international.de/en/programs/data-science-and-business/',
    livingCost: 1150
  }
];

/* ══════════════════════════════════════════════════════════════
   PRIORITY STYLES
══════════════════════════════════════════════════════════════ */
const PRIO = {
  top:         { bg:'rgba(180,83,9,.09)',  color:'#B45309', border:'rgba(180,83,9,.18)' },
  competitive: { bg:'rgba(217,119,6,.09)', color:'#D97706', border:'rgba(217,119,6,.18)' },
  early:       { bg:'rgba(220,38,38,.09)', color:'#DC2626', border:'rgba(220,38,38,.18)' },
  good:        { bg:'rgba(27,94,143,.08)', color:'#1B5E8F', border:'rgba(27,94,143,.16)' },
  backup:      { bg:'rgba(21,128,61,.09)', color:'#15803D', border:'rgba(21,128,61,.18)' },
  safety:      { bg:'rgba(21,128,61,.09)', color:'#15803D', border:'rgba(21,128,61,.18)' },
  reach:       { bg:'rgba(124,58,237,.08)',color:'#7C3AED', border:'rgba(124,58,237,.16)' },
  private:     { bg:'rgba(107,114,128,.08)',color:'#4B5563',border:'rgba(107,114,128,.16)' },
  last:        { bg:'rgba(107,114,128,.06)',color:'#6B7280',border:'rgba(107,114,128,.12)' },
  urgent:      { bg:'rgba(220,38,38,.09)', color:'#DC2626', border:'rgba(220,38,38,.18)' },
  custom:      { bg:'rgba(27,94,143,.08)', color:'#1B5E8F', border:'rgba(27,94,143,.16)' },
};

/* ══════════════════════════════════════════════════════════════
   CITY IMAGES
══════════════════════════════════════════════════════════════ */
const IMG = {
  'Regensburg':    'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=700&q=80',
  'Erlangen':      'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=700&q=80',
  'Rosenheim':     'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=700&q=80',
  'Saarbrücken':   'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=700&q=80',
  'Aschaffenburg': 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=700&q=80',
  'Hamburg':       'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=700&q=80',
  'Deggendorf':    'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=700&q=80',
  'Ingolstadt':    'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=700&q=80',
  'Magdeburg':     'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=700&q=80',
  'Chemnitz':      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=700&q=80',
  'Augsburg':      'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=700&q=80',
  'Passau':        'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=700&q=80',
  'Munich':        'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=700&q=80',
  'Berlin':        'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=700&q=80',
  'Kleve':         'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=700&q=80',
  'Hamm':          'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=700&q=80',
  'Meschede':      'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=700&q=80',
  'Heilbronn':     'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=700&q=80',
  'Ulm':           'https://images.unsplash.com/photo-1555990793-da11153b2473?w=700&q=80',
  'Mittweida':     'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=700&q=80',
  'Eichstätt':     'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=700&q=80',
  'Bremen':        'https://images.unsplash.com/photo-1555990793-da11153b2473?w=700&q=80',
  'Berlin/Online': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=700&q=80',
  'default':       'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=700&q=80',
};
const getImg = c => IMG[c] || IMG['default'];

/* ══════════════════════════════════════════════════════════════
   DEFAULT DOCUMENT CHECKLIST
   smart: fields that get auto-checked based on uni data
══════════════════════════════════════════════════════════════ */
const DEFAULT_DOCS = [
  // Required for all
  { id:'ielts',       label:'IELTS Certificate',              section:'Language & Scores', required:true,  autoCheck: u => false },
  { id:'transcripts', label:'Transcripts / Marksheets',       section:'Academic',          required:true,  autoCheck: u => false },
  { id:'passport',    label:'Passport Copy',                   section:'Identity',          required:true,  autoCheck: u => false },
  { id:'degree',      label:'Degree Certificate / A-Levels',  section:'Academic',          required:true,  autoCheck: u => false },
  // Conditional
  { id:'vpd',         label:'VPD / HEC Attestation',          section:'Academic',          required:false, autoCheck: u => u.vpd },
  { id:'cv',          label:'CV / Resume',                     section:'Application Docs',  required:false, autoCheck: u => !!(u.special && u.special.toLowerCase().includes('cv')) },
  { id:'motivation',  label:'Cover Letter / Motivation Letter',section:'Application Docs',  required:false, autoCheck: u => !!(u.special && (u.special.toLowerCase().includes('cover') || u.special.toLowerCase().includes('motivation'))) },
  { id:'german',      label:'German Language Certificate',     section:'Language & Scores', required:false, autoCheck: u => u.germanReq && u.germanReq !== 'Not Required' && u.germanReq !== 'No' },
  { id:'cnic',        label:'CNIC / National ID Copy',         section:'Identity',          required:false, autoCheck: u => false },
  { id:'bank',        label:'Bank Statement (Blocked Account)',section:'Financial',         required:false, autoCheck: u => false },
  { id:'photos',      label:'Passport-size Photos (2)',        section:'Identity',          required:false, autoCheck: u => false },
  { id:'sat',         label:'SAT Score (if required)',         section:'Language & Scores', required:false, autoCheck: u => !!(u.special && u.special.toLowerCase().includes('sat')) },
];

/* ══════════════════════════════════════════════════════════════
   LIVING COST ESTIMATES BY CITY TYPE
══════════════════════════════════════════════════════════════ */
const CITY_COST_NOTES = {
  'Munich': '💡 Most expensive city in Germany',
  'Hamburg': '💡 Second most expensive — big city costs',
  'Berlin': '💡 Expensive but rich startup career scene',
  'Chemnitz': '💡 Cheapest city — great for saving money',
  'Mittweida': '💡 Very affordable small town',
  'Meschede': '💡 Very affordable NRW option',
  'default': '💡 Average German city living costs'
};

/* ══════════════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════════════ */
let S = {
  myList:   [],
  view:     'my-list',
  filter:   'all',
  search:   '',
  theme:    'light',
  name:     '',
  docChecks:{},   // { uniId: { docId: bool } }
  docNotes: {},   // { uniId: string }
  pkrRate:  305,
  currency: 'both',
};

/* ══════════════════════════════════════════════════════════════
   PERSISTENCE  (v5 adds docs, costs settings)
══════════════════════════════════════════════════════════════ */
function load() {
  try {
    const raw = localStorage.getItem('unitrack_v5');
    if (raw) {
      const d = JSON.parse(raw);
      S.myList    = d.myList    || [];
      S.theme     = d.theme     || 'light';
      S.name      = d.name      || '';
      S.docChecks = d.docChecks || {};
      S.docNotes  = d.docNotes  || {};
      S.pkrRate   = d.pkrRate   || 305;
      S.currency  = d.currency  || 'both';
    }
  } catch {}
}

function persist() {
  localStorage.setItem('unitrack_v5', JSON.stringify({
    myList: S.myList, theme: S.theme, name: S.name,
    docChecks: S.docChecks, docNotes: S.docNotes,
    pkrRate: S.pkrRate, currency: S.currency
  }));
}

/* ══════════════════════════════════════════════════════════════
   DEADLINE HELPERS
══════════════════════════════════════════════════════════════ */
function daysLeft(d) {
  if (!d) return null;
  const now = new Date(); now.setHours(0,0,0,0);
  const tgt = new Date(d); tgt.setHours(0,0,0,0);
  return Math.round((tgt - now) / 86400000);
}

function dlInfo(days) {
  if (days === null) return { label:'TBA',          cls:'tba',     icon:'📅', stripe:'ul-tba' };
  if (days < 0)      return { label:`${Math.abs(days)}d overdue`, cls:'overdue', icon:'⏰', stripe:'ul-overdue' };
  if (days === 0)    return { label:'TODAY!',       cls:'today',   icon:'🚨', stripe:'ul-urgent' };
  if (days <= 7)     return { label:`${days} days`, cls:'urgent',  icon:'🔥', stripe:'ul-urgent' };
  if (days <= 21)    return { label:`${days} days`, cls:'soon',    icon:'⚠️', stripe:'ul-soon' };
  return               { label:`${days} days`, cls:'safe',    icon:'✅', stripe:'ul-safe' };
}

function fmtDate(d) {
  if (!d) return 'TBA';
  return new Date(d).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' });
}

function fmtMonthYear(d) {
  if (!d) return 'TBA';
  return new Date(d).toLocaleDateString('en-GB', { month:'long', year:'numeric' });
}

/* ══════════════════════════════════════════════════════════════
   LIST HELPERS
══════════════════════════════════════════════════════════════ */
const inList   = id => S.myList.some(u => u.id === id);
const getEntry = id => S.myList.find(u => u.id === id) || null;
const getUni   = id => UNI_DB.find(u => u.id === id) || null;

function addToList(id) {
  if (inList(id)) { toast('Already in your list!'); return; }
  const uni = getUni(id);
  S.myList.push({ id, status: 'planning', notes: '' });
  // Init doc checklist for this uni
  initDocChecks(id);
  persist();
  render();
  toast(`${uni?.name || 'University'} added — set your status below`);
}

function removeFromList(id) {
  if (!confirm('Remove this university from your list?')) return;
  S.myList = S.myList.filter(u => u.id !== id);
  persist();
  render();
  closeModal();
  toast('Removed from list.');
}

function setStatus(id, status) {
  const e = getEntry(id);
  if (!e) return;
  e.status = status;
  persist();
  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.querySelectorAll('.s-pill').forEach(p => {
      const s = p.dataset.status;
      p.className = `s-pill${e.status === s ? ` on-${s}` : ''}`;
    });
  }
  renderStats();
}

/* ══════════════════════════════════════════════════════════════
   STATUS BADGE CONFIG
══════════════════════════════════════════════════════════════ */
const STATUS_LABELS = {
  planning: '📌 Planning',
  applied:  '📬 Applied',
  admitted: '🎉 Admitted',
  rejected: '✗ Rejected',
};

/* ══════════════════════════════════════════════════════════════
   CARD BUILDER
══════════════════════════════════════════════════════════════ */
function buildCard(uni, entry, isBrowse) {
  const days = daysLeft(uni.deadline);
  const di   = dlInfo(days);
  const ps   = PRIO[uni.priorityKey] || PRIO.custom;
  const imgSrc = getImg(uni.city);

  const portalCls = uni.portal.startsWith('Uni-Assist') ? 'ch-portal-u'
                  : uni.portal.startsWith('TUMonline')  ? 'ch-portal-o'
                  : 'ch-portal-d';
  const tuitionCls = uni.tuition.toLowerCase().includes('free') ? 'ch-free' : 'ch-fee';

  // Doc progress badge (only in my list)
  let docBadge = '';
  if (entry) {
    const { checked, total } = getDocProgress(uni.id);
    const pct = total ? Math.round((checked/total)*100) : 0;
    const badgeColor = pct === 100 ? 'var(--green)' : pct > 50 ? 'var(--amber)' : 'var(--ink-3)';
    
  }

  const statusHTML = entry ? `
    <div class="status-row-wrap">
      <div class="status-lbl">Application Status</div>
      <div class="status-pills">
        ${Object.entries(STATUS_LABELS).map(([val, lbl]) =>
          `<button class="s-pill${entry.status === val ? ` on-${val}` : ''}"
            data-status="${val}"
            onclick="setStatus('${uni.id}','${val}')">${lbl}</button>`
        ).join('')}
      </div>
    </div>` : '';

  const footerBtns = isBrowse
    ? `<button class="btn-info" onclick="openDetail('${uni.id}')">ℹ More Info</button>
       <button class="btn-add-list${inList(uni.id) ? ' added' : ''}"
         onclick="${inList(uni.id) ? '' : `addToList('${uni.id}')`}">
         ${inList(uni.id) ? '✓ In List' : '＋ Add'}
       </button>`
    : `${docBadge}<button class="btn-info" onclick="openDetail('${uni.id}')">ℹ More Info / Edit</button>`;

  return `
  <article class="u-card" id="card-${uni.id}">
    <div class="card-img">
      <img src="${imgSrc}" alt="${uni.city}" loading="lazy" onerror="this.style.display='none'">
      <div class="img-overlay">
        <span class="city-tag">📍 ${uni.city}, ${uni.state}</span>
        ${entry ? `<button class="card-del-btn" onclick="removeFromList('${uni.id}')" title="Remove">✕</button>` : ''}
      </div>
    </div>
    <div class="urgency-line ${di.stripe}"></div>
    <div class="card-body">
      <div class="card-top">
        <div>
          <div class="uni-name">${uni.name}</div>
          <div class="uni-prog">${uni.program}<span class="deg-tag">${uni.degree}</span></div>
        </div>
        <span class="prio-badge" style="background:${ps.bg};color:${ps.color};border-color:${ps.border};">${uni.priority}</span>
      </div>
      <div class="chips">
        <span class="chip ${portalCls}">${uni.portal.includes('Uni-Assist')?'📋':'🔗'} ${uni.portal.split(' ')[0]}</span>
        <span class="chip ${tuitionCls}">💰 ${uni.tuition}</span>
        <span class="chip ch-ielts">📝 IELTS ${uni.ielts}+</span>
        ${uni.germanReq && uni.germanReq !== 'Not Required' && uni.germanReq !== 'No' ? `<span class="chip ch-de">🇩🇪 ${uni.germanReq}</span>` : ''}
        ${uni.restriction.toLowerCase().includes('nc') && !uni.restriction.toLowerCase().includes('no') ? `<span class="chip ch-nc">⚡ NC</span>` : '<span class="chip ch-nc">⚡ NC-free</span>'}
        ${uni.vpd ? `<span class="chip ch-vpd">📄 VPD</span>` : ''}
      </div>
      <div class="dl-block">
        <span class="dl-icon">${di.icon}</span>
        <div class="dl-text">
          <div class="dl-lbl">Application Deadline</div>
          <div class="dl-date">${fmtDate(uni.deadline)}</div>
          <div class="dl-days ${di.cls}">${di.label}</div>
        </div>
        ${uni.appOpens ? `<div class="dl-opens">
          <span class="dl-lbl">Opens</span>
          <div class="dl-date">${fmtDate(uni.appOpens)}</div>
        </div>` : ''}
      </div>
      ${statusHTML}
    </div>
    <div class="card-foot">${footerBtns}</div>
  </article>`;
}

/* ══════════════════════════════════════════════════════════════
   STATS
══════════════════════════════════════════════════════════════ */
function renderStats() {
  const total    = S.myList.length;
  const applied  = S.myList.filter(u => u.status === 'applied').length;
  const admitted = S.myList.filter(u => u.status === 'admitted').length;

  const nextDays = S.myList.map(e => {
    const u = getUni(e.id); if (!u) return null;
    const d = daysLeft(u.deadline);
    return (d !== null && d >= 0) ? d : null;
  }).filter(d => d !== null);
  const nextD = nextDays.length ? Math.min(...nextDays) : null;

  setText('stat-total',   total);
  setText('stat-applied', applied);
  setText('stat-admitted',admitted);
  setText('stat-next',    nextD !== null ? `${nextD}d` : '—');

  // Urgent banner
  const urgent = S.myList.filter(e => {
    const u = getUni(e.id); if (!u) return false;
    const d = daysLeft(u.deadline);
    return d !== null && d >= 0 && d <= 14;
  });
  const banner = document.getElementById('urgent-banner');
  if (banner) {
    if (urgent.length) {
      const parts = urgent.map(e => {
        const u = getUni(e.id), d = daysLeft(u?.deadline);
        return `<strong>${u?.name?.split(' ')[0]}</strong> (${d === 0 ? 'TODAY' : d+'d'})`;
      }).join(', ');
      banner.innerHTML = `🔥 Urgent deadlines: ${parts} — Don't miss them!`;
      banner.style.display = 'flex';
    } else {
      banner.style.display = 'none';
    }
  }

  // Greeting
  if (S.name) {
    const h = new Date().getHours();
    const g = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
    setText('greet-hi',   g + ',');
    setText('greet-name', S.name + ' 👋');
  }
}

/* ══════════════════════════════════════════════════════════════
   RENDER ROUTER
══════════════════════════════════════════════════════════════ */
function render() {
  renderStats();
  // Show/hide views
  const views = ['view-list','view-timeline','view-costs','view-docs'];
  views.forEach(v => { const el=document.getElementById(v); if(el) el.style.display='none'; });

  if (S.view === 'my-list' || S.view === 'browse') {
    const el = document.getElementById('view-list'); if(el) el.style.display='block';
    S.view === 'my-list' ? renderMyList() : renderBrowse();
  } else if (S.view === 'timeline') {
    const el = document.getElementById('view-timeline'); if(el) el.style.display='block';
    renderTimeline();
  } else if (S.view === 'costs') {
    const el = document.getElementById('view-costs'); if(el) el.style.display='block';
    renderCosts();
  } else if (S.view === 'docs') {
    const el = document.getElementById('view-docs'); if(el) el.style.display='block';
    renderDocs();
  }

  updateTabs();
}

function renderMyList() {
  const grid  = document.getElementById('grid');
  const empty = document.getElementById('empty');
  let list = S.myList.map(e => ({ e, u: getUni(e.id) })).filter(x => x.u);

  if (S.filter !== 'all') list = list.filter(x => x.e.status === S.filter);
  if (S.search) {
    const q = S.search.toLowerCase();
    list = list.filter(x =>
      x.u.name.toLowerCase().includes(q) ||
      x.u.program.toLowerCase().includes(q) ||
      x.u.city.toLowerCase().includes(q)
    );
  }

  list.sort((a,b) => {
    const da = daysLeft(a.u.deadline), db = daysLeft(b.u.deadline);
    if (da === null && db === null) return 0;
    if (da === null) return 1; if (db === null) return -1;
    if (da < 0 && db >= 0) return 1; if (db < 0 && da >= 0) return -1;
    return da - db;
  });

  if (!list.length) {
    grid.innerHTML = ''; empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = list.map(x => buildCard(x.u, x.e, false)).join('');
  }
}

function renderBrowse() {
  const grid = document.getElementById('grid');
  document.getElementById('empty').style.display = 'none';
  let list = [...UNI_DB];
  if (S.search) {
    const q = S.search.toLowerCase();
    list = list.filter(u =>
      u.name.toLowerCase().includes(q) ||
      u.program.toLowerCase().includes(q) ||
      u.city.toLowerCase().includes(q)
    );
  }
  list.sort((a,b) => {
    const da = daysLeft(a.deadline), db = daysLeft(b.deadline);
    if (da === null && db === null) return 0;
    if (da === null) return 1; if (db === null) return -1;
    return da - db;
  });
  grid.innerHTML = list.map(u => buildCard(u, getEntry(u.id), true)).join('');
}

function updateTabs() {
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const tabMap = { 'my-list':'tab-my', 'browse':'tab-all', 'timeline':'tab-timeline', 'costs':'tab-costs', 'docs':'tab-docs' };
  const activeTab = document.getElementById(tabMap[S.view]);
  if (activeTab) activeTab.classList.add('active');

  setText('tab-my-count', S.myList.length);

  // filter bar visibility
  const fb = document.getElementById('filter-bar');
  if (fb) fb.style.display = S.view === 'my-list' ? 'flex' : 'none';

  // controls visibility
  const ctrl = document.getElementById('view-list')?.querySelector('.controls');
  // show search only in list/browse
  const searchBox = document.querySelector('.search-box');
  if (searchBox) searchBox.style.display = (S.view === 'my-list' || S.view === 'browse') ? '' : 'none';
}

/* ══════════════════════════════════════════════════════════════
   FEATURE 3: TIMELINE VIEW
══════════════════════════════════════════════════════════════ */
function renderTimeline() {
  const wrap = document.getElementById('timeline-content');
  if (!wrap) return;

  const allUnis = [...S.myList.map(e => ({ uni: getUni(e.id), entry: e })).filter(x => x.uni)];

  if (!allUnis.length) {
    wrap.innerHTML = `<div class="timeline-empty"><div class="empty-ico">📅</div><div class="empty-title">No universities tracked yet</div><div class="empty-desc">Add universities to your list to see their deadlines on the timeline.</div><button class="btn-go-browse" onclick="document.getElementById('tab-all').click()">Browse Universities →</button></div>`;
    return;
  }

  // Sort by deadline
  allUnis.sort((a,b) => {
    const da = daysLeft(a.uni.deadline), db = daysLeft(b.uni.deadline);
    if (da === null && db === null) return 0;
    if (da === null) return 1; if (db === null) return -1;
    return da - db;
  });

  // Group by month
  const byMonth = {};
  allUnis.forEach(({ uni, entry }) => {
    const key = uni.deadline ? fmtMonthYear(uni.deadline) : 'No Deadline Set';
    if (!byMonth[key]) byMonth[key] = [];
    byMonth[key].push({ uni, entry });
  });

  // App opens section
  const withOpens = allUnis.filter(x => x.uni.appOpens);
  let opensHTML = '';
  if (withOpens.length) {
    const sortedOpens = [...withOpens].sort((a,b) => {
      const da = daysLeft(a.uni.appOpens), db = daysLeft(b.uni.appOpens);
      if (da === null && db === null) return 0;
      if (da === null) return 1; if (db === null) return -1;
      return da - db;
    });
    opensHTML = `
      <div class="tl-section-opens">
        <div class="tl-opens-label">📂 Application Opening Dates</div>
        <div class="timeline-wrap">
          ${sortedOpens.map(({ uni }) => {
            const days = daysLeft(uni.appOpens);
            const di = dlInfo(days);
            const dt = new Date(uni.appOpens);
            const cls = days !== null && days < 0 ? 'tl-overdue' : days !== null && days <= 7 ? 'tl-urgent' : days !== null && days <= 21 ? 'tl-soon' : 'tl-safe';
            return `<div class="timeline-item ${cls}">
              <div class="tl-date-col">
                <div class="tl-day">${dt.getDate()}</div>
                <div class="tl-month">${dt.toLocaleDateString('en-GB',{month:'short'})}</div>
              </div>
              <div class="tl-body">
                <div class="tl-uni">${uni.name}</div>
                <div class="tl-prog">${uni.program}</div>
                <div class="tl-chips">
                  <span class="tl-chip">📂 Apps Open</span>
                  <span class="tl-chip">${uni.portal.split(' ')[0]}</span>
                </div>
              </div>
              <div class="tl-right">
                <div class="tl-days-left" style="color:${days < 0 ? 'var(--tba)' : days <= 7 ? 'var(--urgent)' : 'var(--accent)'}">${days === null ? 'TBA' : days < 0 ? 'Open' : days+'d'}</div>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>`;
  }

  // Deadlines grouped by month
  let deadlinesHTML = '<div class="timeline-wrap">';
  Object.entries(byMonth).forEach(([month, items]) => {
    deadlinesHTML += `<div class="timeline-month"><div class="timeline-month-label">📅 ${month}</div>`;
    items.forEach(({ uni, entry }) => {
      const days = daysLeft(uni.deadline);
      const di = dlInfo(days);
      const dt = uni.deadline ? new Date(uni.deadline) : null;
      const cls = days === null ? '' : days < 0 ? 'tl-overdue' : days <= 7 ? 'tl-urgent' : days <= 21 ? 'tl-soon' : 'tl-safe';
      const statusColors = { planning:'#6B7280', applied:'#0369A1', admitted:'#15803D', rejected:'#B91C1C' };
      const statusBg = { planning:'rgba(107,114,128,.1)', applied:'rgba(3,105,161,.1)', admitted:'rgba(21,128,61,.1)', rejected:'rgba(185,28,28,.1)' };
      deadlinesHTML += `<div class="timeline-item ${cls}">
        <div class="tl-date-col">
          <div class="tl-day">${dt ? dt.getDate() : '?'}</div>
          <div class="tl-month">${dt ? dt.toLocaleDateString('en-GB',{month:'short'}) : 'TBA'}</div>
        </div>
        <div class="tl-body">
          <div class="tl-uni">${uni.name}</div>
          <div class="tl-prog">${uni.program} · ${uni.city}</div>
          <div class="tl-chips">
            <span class="tl-chip tl-chip-${di.cls}">${di.icon} ${di.label}</span>
            <span class="tl-chip">${uni.portal.split(' ')[0]}</span>
            ${uni.tuition.toLowerCase().includes('free') ? `<span class="tl-chip" style="color:var(--green)">Free</span>` : `<span class="tl-chip">${uni.tuition.split(' ')[0]}</span>`}
          </div>
        </div>
        <div class="tl-right">
          <div class="tl-status-badge" style="background:${statusBg[entry.status]||'var(--bg-soft)'};color:${statusColors[entry.status]||'var(--ink-3)'}">
            ${STATUS_LABELS[entry.status] || entry.status}
          </div>
        </div>
      </div>`;
    });
    deadlinesHTML += `</div>`;
  });
  deadlinesHTML += '</div>';

  wrap.innerHTML = opensHTML + `<div style="margin-bottom:12px;"><div class="tl-opens-label" style="background:var(--red-bg);color:var(--urgent)">⏰ Application Deadlines</div></div>` + deadlinesHTML;
}

/* ══════════════════════════════════════════════════════════════
   FEATURE 5: COST ESTIMATOR
══════════════════════════════════════════════════════════════ */
function parseTuitionEur(tuitionStr) {
  if (!tuitionStr) return 0;
  const lower = tuitionStr.toLowerCase();
  if (lower.includes('free') || lower.includes('no tuition')) return 0;
  // Extract number from strings like "€500/sem", "€1,500/sem", "€20,000/yr", "€299/month"
  const match = tuitionStr.match(/€?([\d,]+)/);
  if (!match) return 0;
  const num = parseFloat(match[1].replace(',',''));
  if (lower.includes('/yr') || lower.includes('yr') || lower.includes('/year')) return num;
  if (lower.includes('/month') || lower.includes('month')) return num * 12;
  if (lower.includes('/sem') || lower.includes('sem')) return num * 2; // 2 sems/year
  return num;
}

function formatEur(n) { return `€${n.toLocaleString('en-DE')}`; }
function formatPkr(n, rate) { return `PKR ${Math.round(n * rate).toLocaleString()}`; }

function renderCosts() {
  const wrap = document.getElementById('costs-content');
  if (!wrap) return;

  const rate = S.pkrRate;
  const curr = S.currency;

  const tracked = S.myList.map(e => ({ uni: getUni(e.id), entry: e })).filter(x => x.uni);

  if (!tracked.length) {
    wrap.innerHTML = `<div class="timeline-empty"><div class="empty-ico">💰</div><div class="empty-title">No universities tracked yet</div><div class="empty-desc">Add universities to your list to see cost estimates.</div><button class="btn-go-browse" onclick="document.getElementById('tab-all').click()">Browse Universities →</button></div>`;
    return;
  }

  // Sort by total yearly cost
  tracked.sort((a,b) => {
    const ca = parseTuitionEur(a.uni.tuition) + (a.uni.livingCost||800)*12;
    const cb = parseTuitionEur(b.uni.tuition) + (b.uni.livingCost||800)*12;
    return ca - cb;
  });

  const disclaimer = `<div class="cost-disclaimer">⚠️ <strong>Estimates only.</strong> Living costs are monthly averages for a student. Tuition is per academic year. Actual costs vary. Always verify with the university. PKR rate: 1 € ≈ ${rate} PKR.</div>`;

  const cards = tracked.map(({ uni }) => {
    const tuitionYr = parseTuitionEur(uni.tuition);
    const livingMo  = uni.livingCost || 800;
    const livingYr  = livingMo * 12;
    const totalYr   = tuitionYr + livingYr;
    const isFree    = tuitionYr === 0;
    const cityNote  = CITY_COST_NOTES[uni.city] || CITY_COST_NOTES['default'];

    const showEur = curr !== 'pkr';
    const showPkr = curr !== 'eur';

    return `<div class="cost-card">
      <div class="cost-card-header">
        <div class="cost-uni-name">${uni.name}</div>
        <div class="cost-program">${uni.program} · ${uni.city}</div>
      </div>
      <div class="cost-breakdown">
        <div class="cost-row">
          <span class="cost-row-label">🎓 Tuition (yearly)</span>
          <span class="cost-row-value ${isFree?'free':''}">${isFree ? '✓ FREE' : showEur ? formatEur(tuitionYr) : formatPkr(tuitionYr,rate)}</span>
        </div>
        <div class="cost-row">
          <span class="cost-row-label">🏠 Living (monthly est.)</span>
          <span class="cost-row-value">${showEur ? formatEur(livingMo) : formatPkr(livingMo,rate)}/mo</span>
        </div>
        <div class="cost-row">
          <span class="cost-row-label">📅 Living (yearly)</span>
          <span class="cost-row-value">${showEur ? formatEur(livingYr) : formatPkr(livingYr,rate)}</span>
        </div>
        <div class="cost-divider"></div>
        <div class="cost-total-row">
          <span class="cost-total-label">Total / Year</span>
          <div>
            ${showEur ? `<div class="cost-total-eur">${formatEur(totalYr)}</div>` : ''}
            ${showPkr ? `<div class="cost-total-pkr">≈ ${formatPkr(totalYr,rate)}</div>` : ''}
          </div>
        </div>
      </div>
      <div class="cost-city-info">${cityNote}</div>
    </div>`;
  }).join('');

  wrap.innerHTML = disclaimer + `<div class="cost-grid">${cards}</div>`;
}

/* ══════════════════════════════════════════════════════════════
   FEATURE 1: DOCUMENT CHECKLIST
══════════════════════════════════════════════════════════════ */
function initDocChecks(uniId) {
  if (!S.docChecks[uniId]) {
    S.docChecks[uniId] = {};
    const uni = getUni(uniId);
    if (uni) {
      DEFAULT_DOCS.forEach(doc => {
        // Auto-pre-check docs that the university requires based on data
        S.docChecks[uniId][doc.id] = doc.autoCheck(uni);
      });
    }
  }
}

function getDocProgress(uniId) {
  const checks = S.docChecks[uniId] || {};
  const checked = Object.values(checks).filter(Boolean).length;
  return { checked, total: DEFAULT_DOCS.length };
}

function toggleDoc(uniId, docId) {
  if (!S.docChecks[uniId]) S.docChecks[uniId] = {};
  S.docChecks[uniId][docId] = !S.docChecks[uniId][docId];
  persist();

  // Update just this item UI
  const item = document.getElementById(`doc-${uniId}-${docId}`);
  if (item) {
    const isChecked = S.docChecks[uniId][docId];
    item.classList.toggle('checked', isChecked);
    const mark = item.querySelector('.doc-check-mark');
    if (mark) mark.style.display = isChecked ? 'block' : 'none';
  }
  // Update progress badge in header
  updateDocProgressBadge(uniId);
  // Update card doc badge
  const card = document.getElementById(`card-${uniId}`);
  if (card) {
    const { checked, total } = getDocProgress(uniId);
    const badgeEl = card.querySelector('.card-foot span[style]');
    if (badgeEl) {
      const pct = total ? Math.round((checked/total)*100) : 0;
      const badgeColor = pct === 100 ? 'var(--green)' : pct > 50 ? 'var(--amber)' : 'var(--ink-3)';
      badgeEl.style.color = badgeColor;
      badgeEl.textContent = `📁 ${checked}/${total} docs`;
    }
  }
}

function updateDocProgressBadge(uniId) {
  const badge = document.getElementById(`doc-badge-${uniId}`);
  const bar   = document.getElementById(`doc-bar-${uniId}`);
  const { checked, total } = getDocProgress(uniId);
  const pct = total ? Math.round((checked/total)*100) : 0;
  if (badge) {
    badge.textContent = `${checked}/${total}`;
    badge.style.background = pct === 100 ? 'var(--green-bg)' : pct > 50 ? 'var(--amber-bg)' : 'var(--bg-soft)';
    badge.style.color = pct === 100 ? 'var(--green)' : pct > 50 ? 'var(--amber)' : 'var(--ink-3)';
    badge.style.borderColor = pct === 100 ? 'rgba(21,128,61,.2)' : 'var(--line-2)';
  }
  if (bar) bar.style.width = `${pct}%`;
}

function saveDocNotes(uniId, val) {
  S.docNotes[uniId] = val;
  persist();
}

function toggleDocSection(uniId) {
  const header   = document.getElementById(`doc-header-${uniId}`);
  const checklist = document.getElementById(`doc-list-${uniId}`);
  if (!header || !checklist) return;
  const isOpen = checklist.classList.contains('open');
  checklist.classList.toggle('open', !isOpen);
  header.classList.toggle('open', !isOpen);
}

function renderDocs() {
  const wrap      = document.getElementById('docs-content');
  const emptyEl   = document.getElementById('docs-empty');
  if (!wrap) return;

  const tracked = S.myList.map(e => ({ uni: getUni(e.id), entry: e })).filter(x => x.uni);

  if (!tracked.length) {
    wrap.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    return;
  }
  if (emptyEl) emptyEl.style.display = 'none';

  // Overall progress bar
  let totalChecked = 0, totalAll = 0;
  tracked.forEach(({ uni }) => {
    const { checked, total } = getDocProgress(uni.id);
    totalChecked += checked; totalAll += total;
  });
  const overallPct = totalAll ? Math.round((totalChecked/totalAll)*100) : 0;

  const overallBar = `<div class="docs-progress-bar-wrap">
    <div class="docs-progress-title">
      <span>Overall Document Readiness</span>
      <span style="color:${overallPct===100?'var(--green)':overallPct>50?'var(--amber)':'var(--ink-3)'}">
        ${totalChecked} / ${totalAll} (${overallPct}%)
      </span>
    </div>
    <div class="docs-progress-track">
      <div class="docs-progress-fill" style="width:${overallPct}%"></div>
    </div>
  </div>`;

  // Group docs by section
  const sections = {};
  DEFAULT_DOCS.forEach(doc => {
    if (!sections[doc.section]) sections[doc.section] = [];
    sections[doc.section].push(doc);
  });

  const uniSections = tracked.map(({ uni, entry }) => {
    // Ensure checks are initialized
    initDocChecks(uni.id);
    const { checked, total } = getDocProgress(uni.id);
    const pct = total ? Math.round((checked/total)*100) : 0;

    const sectionHTML = Object.entries(sections).map(([secName, docs]) => {
      const items = docs.map(doc => {
        const isChecked = !!(S.docChecks[uni.id] && S.docChecks[uni.id][doc.id]);
        const isRequired = doc.required || (S.docChecks[uni.id] && S.docChecks[uni.id][doc.id+'_req']);
        return `<div class="doc-item${isChecked?' checked':''}" id="doc-${uni.id}-${doc.id}" onclick="toggleDoc('${uni.id}','${doc.id}')">
          <div class="doc-checkbox">
            <span class="doc-check-mark" style="display:${isChecked?'block':'none'}">✓</span>
          </div>
          <span class="doc-label">${doc.label}</span>
          <span class="doc-required ${doc.required?'doc-req-yes':'doc-req-opt'}">${doc.required?'Required':'Optional'}</span>
        </div>`;
      }).join('');
      return `<div class="docs-section-title">${secName}</div>${items}`;
    }).join('');

    const statusColors = { planning:'#6B7280', applied:'#0369A1', admitted:'#15803D', rejected:'#B91C1C' };

    return `<div class="docs-uni-section">
      <div class="docs-uni-header" id="doc-header-${uni.id}" onclick="toggleDocSection('${uni.id}')">
        <div>
          <div class="docs-uni-name">${uni.name}</div>
          <div class="docs-uni-prog">${uni.program} · <span style="color:${statusColors[entry.status]||'var(--ink-3)'}">${STATUS_LABELS[entry.status]||entry.status}</span></div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="text-align:right;">
            <span class="docs-progress-badge" id="doc-badge-${uni.id}" style="background:${pct===100?'var(--green-bg)':pct>50?'var(--amber-bg)':'var(--bg-soft)'};color:${pct===100?'var(--green)':pct>50?'var(--amber)':'var(--ink-3)'};border:1px solid ${pct===100?'rgba(21,128,61,.2)':'var(--line-2)'}">${checked}/${total}</span>
          </div>
          <span class="docs-expand-btn">▼</span>
        </div>
      </div>

      <div class="docs-checklist" id="doc-list-${uni.id}">
        <div style="height:4px;background:var(--bg-soft);border-radius:20px;margin-bottom:14px;overflow:hidden;">
          <div id="doc-bar-${uni.id}" style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--accent),var(--safe));border-radius:20px;transition:width .4s ease;"></div>
        </div>
        ${sectionHTML}
        <div class="docs-notes-area">
          <div class="docs-section-title">Personal Notes</div>
          <textarea class="docs-notes-input" placeholder="Application password, portal login, notes about required docs…"
            oninput="saveDocNotes('${uni.id}',this.value)"
            onchange="saveDocNotes('${uni.id}',this.value)"
          >${S.docNotes[uni.id]||''}</textarea>
        </div>
      </div>
    </div>`;
  }).join('');

  wrap.innerHTML = overallBar + uniSections;

  // Auto-open the first uni if only one
  if (tracked.length === 1) {
    toggleDocSection(tracked[0].uni.id);
  }
}

/* ══════════════════════════════════════════════════════════════
   DETAIL / EDIT MODAL
══════════════════════════════════════════════════════════════ */
let _editMode = false;

function openDetail(id) {
  const uni = getUni(id);
  if (!uni) return;
  _editMode = false;
  renderDetailModal(id, uni);
  document.getElementById('detail-overlay').classList.add('open');
  document.body.classList.add('modal-open');
}

function closeModal() {
  document.getElementById('detail-overlay').classList.remove('open');
  document.body.classList.remove('modal-open');
  _editMode = false;
}

function renderDetailModal(id, uni) {
  const entry  = getEntry(id);
  const days   = daysLeft(uni.deadline);
  const di     = dlInfo(days);
  const ps     = PRIO[uni.priorityKey] || PRIO.custom;
  const imgSrc = getImg(uni.city);
  const listed = inList(id);

  const content = document.getElementById('detail-content');
  content.innerHTML = `
    <div class="modal-img">
      <img src="${imgSrc}" alt="${uni.city}" onerror="this.style.display='none'">
      <div class="modal-img-ov">
        <div class="modal-city">📍 ${uni.city}, ${uni.state}</div>
        <div class="modal-uname">${uni.name}</div>
      </div>
      <button class="modal-close-btn" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body" id="detail-body">
      ${renderDetailView(id, uni, entry, di, ps)}
    </div>
    <div class="save-bar">
      <span class="save-hint" id="save-hint">${listed ? 'Update any field and save changes.' : 'Add to your list to track this university.'}</span>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        ${_editMode
          ? `<button class="btn-secondary" onclick="toggleEdit('${id}')">Cancel</button>
             <button class="btn-primary green-btn" onclick="saveEdits('${id}')">💾 Save Changes</button>`
          : `<button class="btn-secondary" onclick="toggleEdit('${id}')">✎ Edit Info</button>
             ${listed
               ? `<button class="btn-secondary danger" onclick="removeFromList('${id}')">Remove</button>`
               : `<button class="btn-primary" onclick="addToList('${id}');closeModal();">＋ Add to List</button>`
             }`
        }
      </div>
    </div>`;
}

function renderDetailView(id, uni, entry, di, ps) {
  return `
    <div class="m-section">
      <div class="m-sec-title">Program Overview</div>
      <div class="info-grid">
        <div class="info-cell"><div class="info-lbl">Program</div><div class="info-val">${uni.program}</div></div>
        <div class="info-cell"><div class="info-lbl">Degree</div><div class="info-val">${uni.degree}</div></div>
        <div class="info-cell"><div class="info-lbl">Language</div><div class="info-val">${uni.language}</div></div>
        <div class="info-cell"><div class="info-lbl">Match Score</div><div class="info-val" style="color:var(--green)">${uni.matchScore || '—'}</div></div>
        <div class="info-cell"><div class="info-lbl">Priority</div><div class="info-val" style="color:${ps.color}">${uni.priority}</div></div>
        <div class="info-cell"><div class="info-lbl">City / State</div><div class="info-val">${uni.city}, ${uni.state}</div></div>
      </div>
    </div>
    <div class="m-section">
      <div class="m-sec-title">Deadlines & Application</div>
      <div class="info-grid">
        <div class="info-cell"><div class="info-lbl">Application Deadline</div><div class="info-val" style="color:${di.cls==='urgent'||di.cls==='today'?'var(--urgent)':'var(--ink)'};">${fmtDate(uni.deadline)} <small style="color:var(--ink-3)">(${di.label})</small></div></div>
        <div class="info-cell"><div class="info-lbl">App Opens</div><div class="info-val">${fmtDate(uni.appOpens)}</div></div>
        <div class="info-cell"><div class="info-lbl">Apply Via</div><div class="info-val">${uni.portal}</div></div>
        <div class="info-cell"><div class="info-lbl">VPD Required</div><div class="info-val">${uni.vpd ? '⚠ Yes' : 'No'}</div></div>
      </div>
    </div>
    <div class="m-section">
      <div class="m-sec-title">Requirements</div>
      <div class="info-grid">
        <div class="info-cell"><div class="info-lbl">IELTS Min.</div><div class="info-val">${uni.ielts}+</div></div>
        <div class="info-cell"><div class="info-lbl">German Required</div><div class="info-val">${uni.germanReq}</div></div>
        <div class="info-cell"><div class="info-lbl">NC / Restriction</div><div class="info-val">${uni.restriction}</div></div>
        <div class="info-cell"><div class="info-lbl">Tuition / Fees</div><div class="info-val">${uni.tuition}</div></div>
      </div>
    </div>
    ${uni.special ? `
    <div class="m-section">
      <div class="m-sec-title">Special Requirements</div>
      <div class="note-box warning">⚠️ ${uni.special}</div>
    </div>` : ''}
    <div class="m-section">
      <div class="m-sec-title">Notes & Strategy</div>
      <div class="note-box" style="margin-bottom:8px;">${uni.notes}</div>
      ${uni.strategy ? `<div class="note-box strategy">💡 ${uni.strategy}</div>` : ''}
    </div>
    ${entry ? `
    <div class="m-section">
      <div class="m-sec-title">Your Notes</div>
      <textarea class="edit-textarea" style="width:100%;" placeholder="Personal notes, portal passwords, reminders…"
        onchange="updateNotes('${id}',this.value)"
        oninput="updateNotes('${id}',this.value)"
      >${entry.notes || ''}</textarea>
    </div>` : ''}
    <div class="m-section">
      <div class="m-sec-title">Links</div>
      <div class="modal-actions">
        <a href="${uni.link}" target="_blank" rel="noopener" class="btn-primary">🔗 Program Page</a>
        <a href="mailto:${uni.email}" class="btn-secondary">✉ ${uni.email}</a>
      </div>
    </div>`;
}

function renderEditView(id, uni) {
  return `
    <div class="m-section">
      <div class="m-sec-title">Edit University Info</div>
      <div class="edit-grid">
        <div class="edit-group edit-full"><label class="edit-lbl">University Name</label><input class="edit-input" id="e-name" value="${esc(uni.name)}"></div>
        <div class="edit-group"><label class="edit-lbl">Program Name</label><input class="edit-input" id="e-program" value="${esc(uni.program)}"></div>
        <div class="edit-group"><label class="edit-lbl">Degree</label><select class="edit-select" id="e-degree">${['B.Sc.','B.Eng.','B.A.','M.Sc.','M.Eng.'].map(d=>`<option${uni.degree===d?' selected':''}>${d}</option>`).join('')}</select></div>
        <div class="edit-group"><label class="edit-lbl">City</label><input class="edit-input" id="e-city" value="${esc(uni.city)}"></div>
        <div class="edit-group"><label class="edit-lbl">State</label><input class="edit-input" id="e-state" value="${esc(uni.state)}"></div>
        <div class="edit-group"><label class="edit-lbl">Language</label><select class="edit-select" id="e-language">${['English','German','Bilingual (EN/DE)'].map(l=>`<option${uni.language===l?' selected':''}>${l}</option>`).join('')}</select></div>
        <div class="edit-group"><label class="edit-lbl">Deadline</label><input class="edit-input" type="date" id="e-deadline" value="${uni.deadline||''}"></div>
        <div class="edit-group"><label class="edit-lbl">App Opens</label><input class="edit-input" type="date" id="e-appOpens" value="${uni.appOpens||''}"></div>
        <div class="edit-group"><label class="edit-lbl">Portal</label><select class="edit-select" id="e-portal">${['Direct','Uni-Assist','TUMonline (direct)','Hochschulstart'].map(p=>`<option${uni.portal===p?' selected':''}>${p}</option>`).join('')}</select></div>
        <div class="edit-group"><label class="edit-lbl">Tuition</label><input class="edit-input" id="e-tuition" value="${esc(uni.tuition)}"></div>
        <div class="edit-group"><label class="edit-lbl">IELTS Min.</label><input class="edit-input" id="e-ielts" value="${esc(uni.ielts)}"></div>
        <div class="edit-group"><label class="edit-lbl">German Req.</label><input class="edit-input" id="e-germanReq" value="${esc(uni.germanReq)}"></div>
        <div class="edit-group"><label class="edit-lbl">NC / Restriction</label><input class="edit-input" id="e-restriction" value="${esc(uni.restriction)}"></div>
        <div class="edit-group"><label class="edit-lbl">VPD Required</label><select class="edit-select" id="e-vpd"><option value="false"${!uni.vpd?' selected':''}>No</option><option value="true"${uni.vpd?' selected':''}>Yes</option></select></div>
        <div class="edit-group"><label class="edit-lbl">Contact Email</label><input class="edit-input" type="email" id="e-email" value="${esc(uni.email||'')}"></div>
        <div class="edit-group edit-full"><label class="edit-lbl">Program Link</label><input class="edit-input" type="url" id="e-link" value="${esc(uni.link||'')}"></div>
        <div class="edit-group edit-full"><label class="edit-lbl">Special Requirements</label><textarea class="edit-textarea" id="e-special">${esc(uni.special||'')}</textarea></div>
        <div class="edit-group edit-full"><label class="edit-lbl">Notes</label><textarea class="edit-textarea" id="e-notes">${esc(uni.notes||'')}</textarea></div>
        <div class="edit-group edit-full"><label class="edit-lbl">Strategy</label><textarea class="edit-textarea" id="e-strategy">${esc(uni.strategy||'')}</textarea></div>
      </div>
    </div>`;
}

function toggleEdit(id) {
  const uni = getUni(id); if (!uni) return;
  _editMode = !_editMode;
  const body  = document.getElementById('detail-body');
  const entry = getEntry(id);
  const di    = dlInfo(daysLeft(uni.deadline));
  const ps    = PRIO[uni.priorityKey] || PRIO.custom;
  body.innerHTML = _editMode ? renderEditView(id, uni) : renderDetailView(id, uni, entry, di, ps);
  const bar = document.querySelector('.save-bar');
  if (bar) bar.innerHTML = `
    <span class="save-hint">${_editMode ? 'Edit any field then save.' : 'Click Edit to update any info.'}</span>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      ${_editMode
        ? `<button class="btn-secondary" onclick="toggleEdit('${id}')">Cancel</button><button class="btn-primary green-btn" onclick="saveEdits('${id}')">💾 Save Changes</button>`
        : `<button class="btn-secondary" onclick="toggleEdit('${id}')">✎ Edit Info</button>${entry?`<button class="btn-secondary danger" onclick="removeFromList('${id}')">Remove</button>`:''}`
      }
    </div>`;
}

function saveEdits(id) {
  const uni = getUni(id); if (!uni) return;
  const gv = sel => { const el = document.getElementById(sel); return el ? el.value.trim() : null; };
  uni.name        = gv('e-name')        || uni.name;
  uni.program     = gv('e-program')     || uni.program;
  uni.degree      = gv('e-degree')      || uni.degree;
  uni.city        = gv('e-city')        || uni.city;
  uni.state       = gv('e-state')       || uni.state;
  uni.language    = gv('e-language')    || uni.language;
  uni.deadline    = gv('e-deadline')    || null;
  uni.appOpens    = gv('e-appOpens')    || null;
  uni.portal      = gv('e-portal')      || uni.portal;
  uni.tuition     = gv('e-tuition')     || uni.tuition;
  uni.ielts       = gv('e-ielts')       || uni.ielts;
  uni.germanReq   = gv('e-germanReq')   || uni.germanReq;
  uni.restriction = gv('e-restriction') || uni.restriction;
  uni.email       = gv('e-email')       || uni.email;
  uni.link        = gv('e-link')        || uni.link;
  uni.special     = gv('e-special')     || '';
  uni.notes       = gv('e-notes')       || '';
  uni.strategy    = gv('e-strategy')    || '';
  uni.vpd         = gv('e-vpd') === 'true';
  persist();
  _editMode = false;
  const entry = getEntry(id);
  const di    = dlInfo(daysLeft(uni.deadline));
  const ps    = PRIO[uni.priorityKey] || PRIO.custom;
  document.getElementById('detail-body').innerHTML = renderDetailView(id, uni, entry, di, ps);
  const bar = document.querySelector('.save-bar');
  if (bar) bar.innerHTML = `
    <span class="save-hint">Changes saved ✓</span>
    <div style="display:flex;gap:8px;">
      <button class="btn-secondary" onclick="toggleEdit('${id}')">✎ Edit Info</button>
      ${entry?`<button class="btn-secondary danger" onclick="removeFromList('${id}')">Remove</button>`:''}
    </div>`;
  const card = document.getElementById(`card-${id}`);
  if (card) {
    const tmp = document.createElement('div');
    tmp.innerHTML = buildCard(uni, entry, S.view === 'browse');
    card.replaceWith(tmp.firstElementChild);
  }
  toast('Changes saved!');
}

function updateNotes(id, val) {
  const e = getEntry(id); if (e) { e.notes = val; persist(); }
}

/* ══════════════════════════════════════════════════════════════
   ADD CUSTOM UNIVERSITY
══════════════════════════════════════════════════════════════ */
function openCustomModal() {
  document.getElementById('custom-overlay').classList.add('open');
  document.body.classList.add('modal-open');
}

function closeCustomModal() {
  document.getElementById('custom-overlay').classList.remove('open');
  document.body.classList.remove('modal-open');
  document.getElementById('custom-form').reset();
}

function saveCustom() {
  const gv = id => (document.getElementById(id)?.value || '').trim();
  const name = gv('cn-name');
  if (!name) { document.getElementById('cn-name').classList.add('error'); toast('University name is required.'); return; }
  const id = 'custom-' + Date.now();
  const uni = {
    id, name,
    city:        gv('cn-city')     || 'Germany',
    state:       gv('cn-state')    || 'Germany',
    program:     gv('cn-program')  || 'Program TBD',
    degree:      gv('cn-degree')   || 'B.Sc.',
    language:    gv('cn-language') || 'English',
    appOpens:    gv('cn-opens')    || null,
    deadline:    gv('cn-deadline') || null,
    portal:      gv('cn-portal')   || 'Direct',
    tuition:     gv('cn-tuition')  || 'Unknown',
    ielts:       gv('cn-ielts')    || 'TBA',
    germanReq:   gv('cn-german')   || 'Not Required',
    restriction: gv('cn-restriction') || 'Unknown',
    vpd:         gv('cn-vpd') === 'true',
    matchScore:  '—',
    priorityKey: 'custom', priority: '📝 Custom',
    notes:       gv('cn-notes')    || '',
    strategy:    '',
    special:     '',
    email:       gv('cn-email')    || '',
    link:        gv('cn-link')     || '#',
    livingCost:  800,
  };
  UNI_DB.push(uni);
  S.myList.push({ id, status: 'planning', notes: '' });
  initDocChecks(id);
  persist();
  closeCustomModal();
  render();
  toast(`${name} added to your list!`);
}

/* ══════════════════════════════════════════════════════════════
   FEATURE 9: IMPORT BACKUP
══════════════════════════════════════════════════════════════ */
let _importData = null;

function openImportModal() {
  document.getElementById('import-overlay').classList.add('open');
  document.body.classList.add('modal-open');
  _importData = null;
  document.getElementById('import-preview').style.display = 'none';
  document.getElementById('import-drop-zone').style.display = 'block';
}

function closeImportModal() {
  document.getElementById('import-overlay').classList.remove('open');
  document.body.classList.remove('modal-open');
  _importData = null;
  const fi = document.getElementById('import-file-input');
  if (fi) fi.value = '';
}

function handleImportFile(file) {
  if (!file || !file.name.endsWith('.json')) { toast('Please select a valid .json backup file.'); return; }
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.myList && !Array.isArray(data.myList)) throw new Error('Invalid format');
      _importData = data;
      // Show preview
      const prev = document.getElementById('import-preview');
      const prevContent = document.getElementById('import-preview-content');
      prevContent.innerHTML = `
        <div class="import-preview-row"><span>Universities tracked</span><span class="import-preview-val">${data.myList?.length || 0}</span></div>
        <div class="import-preview-row"><span>Name saved</span><span class="import-preview-val">${data.name || '—'}</span></div>
        <div class="import-preview-row"><span>Doc checks saved</span><span class="import-preview-val">${Object.keys(data.docChecks||{}).length}</span></div>
        <div class="import-preview-row"><span>Theme</span><span class="import-preview-val">${data.theme || 'light'}</span></div>
        <div style="margin-top:10px;padding:10px;background:var(--red-bg);border-radius:var(--r);font-size:12px;color:var(--urgent);">⚠️ This will <strong>replace</strong> your current data. Make sure you've exported your current backup first.</div>
      `;
      prev.style.display = 'block';
      document.getElementById('import-drop-zone').style.display = 'none';
    } catch {
      toast('Invalid backup file. Make sure it\'s a UniTrack JSON export.');
    }
  };
  reader.readAsText(file);
}

function confirmImport() {
  if (!_importData) return;
  S.myList    = _importData.myList    || [];
  S.name      = _importData.name      || S.name;
  S.theme     = _importData.theme     || S.theme;
  S.docChecks = _importData.docChecks || {};
  S.docNotes  = _importData.docNotes  || {};
  S.pkrRate   = _importData.pkrRate   || 305;
  persist();
  applyTheme(S.theme);
  setText('greet-name', S.name + ' 👋');
  closeImportModal();
  render();
  toast(`Backup restored! ${S.myList.length} universities loaded.`);
}

/* ══════════════════════════════════════════════════════════════
   FEATURE 10: PDF EXPORT
══════════════════════════════════════════════════════════════ */
function generatePDF() {
  const tracked = S.myList.map(e => ({ uni: getUni(e.id), entry: e })).filter(x => x.uni);
  if (!tracked.length) { toast('Add universities to your list first.'); return; }

  const now = new Date().toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' });
  const rate = S.pkrRate;

  // Page 1: Summary
  const summaryStats = `
    <div class="pdf-summary-stats">
      <div class="pdf-stat-box"><div class="pdf-stat-num">${tracked.length}</div><div class="pdf-stat-lbl">Tracking</div></div>
      <div class="pdf-stat-box"><div class="pdf-stat-num" style="color:#0369A1">${tracked.filter(x=>x.entry.status==='applied').length}</div><div class="pdf-stat-lbl">Applied</div></div>
      <div class="pdf-stat-box"><div class="pdf-stat-num" style="color:#15803D">${tracked.filter(x=>x.entry.status==='admitted').length}</div><div class="pdf-stat-lbl">Admitted</div></div>
      <div class="pdf-stat-box"><div class="pdf-stat-num" style="color:#D97706">${(() => { const d=tracked.map(x=>daysLeft(x.uni.deadline)).filter(d=>d!==null&&d>=0); return d.length?Math.min(...d)+'d':'—'; })()}</div><div class="pdf-stat-lbl">Next Deadline</div></div>
    </div>`;

  // Universities
  const uniBlocks = tracked.map(({ uni, entry }) => {
    const days = daysLeft(uni.deadline);
    const di   = dlInfo(days);
    const statusColors = { planning:'#6B7280', applied:'#0369A1', admitted:'#15803D', rejected:'#B91C1C', };
    return `
      <div class="pdf-uni-block">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">
          <div>
            <div class="pdf-uni-name">${uni.name}</div>
            <div class="pdf-uni-prog">${uni.program} · ${uni.city}, ${uni.state}</div>
          </div>
          <span class="pdf-status-badge" style="background:${statusColors[entry.status]||'#6B7280'}22;color:${statusColors[entry.status]||'#6B7280'}">${STATUS_LABELS[entry.status]||entry.status}</span>
        </div>
        <div class="pdf-row">
          <div class="pdf-cell"><div class="pdf-cell-label">Deadline</div><div class="pdf-cell-val" style="color:${di.cls==='urgent'?'#DC2626':''};">${fmtDate(uni.deadline)} (${di.label})</div></div>
          <div class="pdf-cell"><div class="pdf-cell-label">IELTS</div><div class="pdf-cell-val">${uni.ielts}+</div></div>
          <div class="pdf-cell"><div class="pdf-cell-label">Portal</div><div class="pdf-cell-val">${uni.portal.split(' ')[0]}</div></div>
          <div class="pdf-cell"><div class="pdf-cell-label">Tuition/yr</div><div class="pdf-cell-val">${uni.tuition.toLowerCase().includes('free')?'FREE':uni.tuition}</div></div>
        </div>
        ${entry.notes ? `<div style="margin-top:8px;font-size:11px;color:#555;background:#f9f9f9;padding:8px;border-radius:6px;border:1px solid #eee;">📝 ${entry.notes}</div>` : ''}
      </div>`;
  }).join('');

  // Timeline
  const sortedDeadlines = [...tracked].sort((a,b) => {
    const da=daysLeft(a.uni.deadline), db=daysLeft(b.uni.deadline);
    if(da===null&&db===null)return 0; if(da===null)return 1; if(db===null)return -1; return da-db;
  });
  const timelineRows = sortedDeadlines.map(({ uni, entry }) => {
    const days = daysLeft(uni.deadline);
    return `<div class="pdf-timeline-row">
      <div class="pdf-tl-date">${fmtDate(uni.deadline)}</div>
      <div class="pdf-tl-name">${uni.name} — ${uni.program}</div>
      <div class="pdf-tl-days">${days === null ? 'TBA' : days < 0 ? 'Overdue' : days+'d left'}</div>
    </div>`;
  }).join('');

  // Costs
  const costRows = [...tracked].sort((a,b) => {
    const ca = parseTuitionEur(a.uni.tuition) + (a.uni.livingCost||800)*12;
    const cb = parseTuitionEur(b.uni.tuition) + (b.uni.livingCost||800)*12;
    return ca-cb;
  }).map(({ uni }) => {
    const tuitionYr = parseTuitionEur(uni.tuition);
    const total = tuitionYr + (uni.livingCost||800)*12;
    return `<div class="pdf-cost-row">
      <span>${uni.name}</span>
      <span class="pdf-cost-total">€${total.toLocaleString()}/yr ≈ PKR ${Math.round(total*rate).toLocaleString()}</span>
    </div>`;
  }).join('');



  setTimeout(() => {
    window.print();
  }, 200);
  toast('Opening print dialog for PDF…');
}

/* ══════════════════════════════════════════════════════════════
   THEME
══════════════════════════════════════════════════════════════ */
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  S.theme = S.theme === 'dark' ? 'light' : 'dark';
  applyTheme(S.theme);
  persist();
}

/* ══════════════════════════════════════════════════════════════
   TOAST
══════════════════════════════════════════════════════════════ */
function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ══════════════════════════════════════════════════════════════
   UTILITIES
══════════════════════════════════════════════════════════════ */
const q       = s => document.querySelector(s);
const setText = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
const esc     = s => (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

/* ══════════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════════ */
function init() {
  load();
  applyTheme(S.theme);

  const welcome = document.getElementById('welcome-screen');
  const app     = document.getElementById('app');

  if (S.name) {
    welcome.style.display = 'none';
    app.classList.add('show');
    // Init doc checks for all tracked unis
    S.myList.forEach(e => initDocChecks(e.id));
    render();
  } else {
    welcome.style.display = 'flex';
  }

  // Welcome submit
  const startBtn = document.getElementById('start-btn');
  const nameInp  = document.getElementById('welcome-name');
  startBtn?.addEventListener('click', startApp);
  nameInp?.addEventListener('keydown', e => { if (e.key === 'Enter') startApp(); });

  // Tabs
  const tabActions = {
    'tab-my':       () => { S.view='my-list'; S.search=''; clearSearch(); render(); },
    'tab-all':      () => { S.view='browse';  S.search=''; clearSearch(); render(); },
    'tab-timeline': () => { S.view='timeline'; render(); },
    'tab-costs':    () => { S.view='costs'; render(); },
    'tab-docs':     () => { S.view='docs'; render(); },
  };
  Object.entries(tabActions).forEach(([id, fn]) => document.getElementById(id)?.addEventListener('click', fn));

  // Search
  document.getElementById('search')?.addEventListener('input', e => { S.search = e.target.value; render(); });

  // Filter pills
  document.querySelectorAll('.f-pill').forEach(p => {
    p.addEventListener('click', () => {
      S.filter = p.dataset.filter;
      document.querySelectorAll('.f-pill').forEach(x => x.classList.remove('on'));
      p.classList.add('on');
      renderMyList();
    });
  });

  // Theme
  document.getElementById('theme-btn')?.addEventListener('click', toggleTheme);

  // Add custom
  document.getElementById('btn-add-custom')?.addEventListener('click', openCustomModal);
  document.getElementById('close-custom')?.addEventListener('click', closeCustomModal);
  document.getElementById('cancel-custom')?.addEventListener('click', closeCustomModal);
  document.getElementById('save-custom-btn')?.addEventListener('click', saveCustom);

  // Import
  document.getElementById('btn-import')?.addEventListener('click', openImportModal);
  document.getElementById('close-import')?.addEventListener('click', closeImportModal);
  document.getElementById('cancel-import')?.addEventListener('click', closeImportModal);
  document.getElementById('confirm-import')?.addEventListener('click', confirmImport);
  document.getElementById('btn-browse-file')?.addEventListener('click', () => document.getElementById('import-file-input').click());
  document.getElementById('import-file-input')?.addEventListener('change', e => handleImportFile(e.target.files[0]));

  // Import drag and drop
  const dropZone = document.getElementById('import-drop-zone');
  dropZone?.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('drag-over'); });
  dropZone?.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
  dropZone?.addEventListener('drop', e => { e.preventDefault(); dropZone.classList.remove('drag-over'); handleImportFile(e.dataTransfer.files[0]); });
  dropZone?.addEventListener('click', () => document.getElementById('import-file-input').click());

  // PDF export
  document.getElementById('btn-pdf')?.addEventListener('click', generatePDF);

  // Cost recalculate
  document.getElementById('btn-recalc')?.addEventListener('click', () => {
    const rateEl = document.getElementById('pkr-rate');
    const currEl = document.getElementById('currency-toggle');
    if (rateEl) S.pkrRate = parseFloat(rateEl.value) || 305;
    if (currEl) S.currency = currEl.value;
    persist();
    renderCosts();
    toast('Costs recalculated!');
  });

  // Export
  document.getElementById('btn-export')?.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({
      myList: S.myList, name: S.name, theme: S.theme,
      docChecks: S.docChecks, docNotes: S.docNotes,
      pkrRate: S.pkrRate, currency: S.currency
    }, null, 2)], { type:'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `unitrack-${(S.name||'backup').replace(/\s+/g,'-')}-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    toast('Backup exported!');
  });

  // Close overlays on backdrop click
  document.getElementById('detail-overlay')?.addEventListener('click', e => { if (e.target === document.getElementById('detail-overlay')) closeModal(); });
  document.getElementById('custom-overlay')?.addEventListener('click', e => { if (e.target === document.getElementById('custom-overlay')) closeCustomModal(); });
  document.getElementById('import-overlay')?.addEventListener('click', e => { if (e.target === document.getElementById('import-overlay')) closeImportModal(); });

  // Esc key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeCustomModal(); closeImportModal(); }
  });

  // Change name
  document.getElementById('change-name')?.addEventListener('click', () => {
    const n = prompt('Update your name:', S.name);
    if (n && n.trim()) { S.name = n.trim(); persist(); renderStats(); toast('Name updated!'); }
  });
}

function clearSearch() {
  const si = document.getElementById('search');
  if (si) si.value = '';
}

function startApp() {
  const inp  = document.getElementById('welcome-name');
  const name = inp?.value.trim() || '';
  if (!name) { inp?.classList.add('error'); setTimeout(() => inp?.classList.remove('error'), 1200); return; }
  S.name = name;
  persist();
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('app').classList.add('show');
  render();
  toast(`Welcome, ${name}! 🇩🇪`);
}

// Expose to HTML onclick attributes
window.addToList      = addToList;
window.removeFromList = removeFromList;
window.setStatus      = setStatus;
window.openDetail     = openDetail;
window.closeModal     = closeModal;
window.toggleEdit     = toggleEdit;
window.saveEdits      = saveEdits;
window.updateNotes    = updateNotes;
window.toggleDoc      = toggleDoc;
window.saveDocNotes   = saveDocNotes;
window.toggleDocSection = toggleDocSection;

document.addEventListener('DOMContentLoaded', init);
