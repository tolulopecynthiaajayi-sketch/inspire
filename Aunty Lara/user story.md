# User Stories & Technical Requirements

## 1. Education Services
**User Story:** As an international student, I want to create an account and submit a detailed profile with my academic background, course preferences, and documents so that Alora can find the best university matches for me.

### Acceptance Criteria
- **Account Creation & Intake Form:** The system must present a detailed form upon student account creation.
- **Personal & Academic Details:** Students must input personal details (name, contact) and academic background (previous degrees, grades).
- **Course Preferences:** The form must ask for "Top 3 Courses I would like to study" and "Level of Study" (e.g., Bachelor, Master).
- **Location Preferences:** Students must specify their "Preferred City" or region in France.
- **Document Vault:**
    - Students must be able to upload standard documents (Transcript, Passport).
    - **Custom Uploads:** Students must be able to add "Other" documents and *rename* them (e.g., "Architecture Portfolio", "Recommendation Letter").
- **Application Tracking Dashboard:**
    - Students must see a real-time status of their application (e.g., "Under Review", "Missing Documents", "Submitted to University").
    - These statuses are updated by the Admin and reflected immediately in the student view.
- **Consultation Request:** Submitting the form should trigger a "Consultation Pending" status or notification to the Edu Alora team.

### Test Scenarios
- **Scenario 1:** Verify that a new student cannot proceed without filling in the mandatory "Top 3 Courses" and "Level of Study" fields.
- **Scenario 2:** Confirm that document uploads are successfully linked to the student's submitted profile.
- **Scenario 3:** Ensure the system records the "Preferred City" and displays it in the admin/consultant view.

---

## 2. Housing Services
**User Story:** As a student or young professional, I want to search for verified housing in France, while as a landlord/agency, I want to list my properties and view eligible tenants.

### Acceptance Criteria
**For Students:**
- The site must feature a search tool for verified apartments and student residences.

**For Landlords:**
- There must be a "List Your Property" portal where landlords can input house details and photos.

**AI Matching Agent:**
- An intelligent agent must match students to landlords based on French housing criteria.
- **Key Matching Factors:**
  - **Guarantor Verification:** (e.g., *Visale*, *Garantme*, or physical guarantor).
  - **Student Status:** (Scholarship holder, PhD, Intern).
  - **Financial Proof:** (3x rent coverage or blocked account).
- The agent should assign a "Match Score" (%) to every student-application for a specific property.

**Visits:**
- A system to request or view verification/visit reports for a property must be accessible.

### Test Scenarios
- **Scenario 1:** Verify that a landlord can successfully list a property and that it appears in the student search results.
- **Scenario 2:** Ensure students can filter housing by price range and proximity to their chosen school.

---

## 3. Integration & Mentorship
**User Story:** As a local French family, I want to browse student profiles to offer mentorship and cultural exchange, helping them practice the French language.

### Acceptance Criteria
- The site must have a dedicated "Mentorship" or "Inspire" section.
- Local families must be able to register and view a pool of international students interested in cultural integration.
- A secure messaging or "Interest" button must allow families to initiate contact with a student.
- The platform must clearly state the goals of the program: language practice and cultural exchange.

### Test Scenarios
- **Scenario 1:** Verify that a registered family can filter students based on interests or native language.
- **Scenario 2:** Test the notification system to ensure students are alerted when a family expresses interest in mentoring them.

---

## 4. Corporate Recruitment (Alora Talent)
**User Story:** As a corporate recruiter, I want to post job openings and internships specifically for multilingual students and professionals.

### Acceptance Criteria
- Companies must have a "Partner Inquiry" or "Recruiter" dashboard.
- Recruiters must be able to post job descriptions, internship roles, and required languages.
- The system must allow students to search for jobs by keyword (e.g., "multilingual," "internship").
- A "Request Talent Access" button should be available for companies to view pre-vetted candidates.

### Test Scenarios
- **Scenario 1:** Confirm that a company can successfully post a job and that it is visible to students on the job board.
- **Scenario 2:** Verify that the search function correctly pulls results for "multilingual" roles.

---

# Technical Requirements

## 1. System Architecture & General Requirements
- **Platform Type:** Responsive Web Application (optimized for Desktop, Tablet, and Mobile).
- **User Roles:** Student/Applicant, Landlord/Agency, Mentor Family, Corporate Recruiter, and Super Admin.
- **Authentication:** Secure Login/Sign-up for each user role with Multi-Factor Authentication (MFA) options.
- **Database:** A relational database (e.g., PostgreSQL) to manage complex relationships between students, housing listings, and job postings.

## 2. Education Offering Requirements
- **Student Intake & Profiling System:**
    - A multi-step form wizard to capture: Personal Information, Academic History, and Future Goals.
    - **Key Fields:** "Top 3 Course Preferences," "Level of Study" (Bachelor/Master/PhD), "Preferred City/Region."
- **File Upload API:** To handle transcripts, passports, and CVs (supported formats: PDF, DOCX, JPEG) directly within the intake flow.
- **Consultation Workflow:** Instead of direct application to schools, the system routes the profile to an internal counselor for review and matching.
- **Narrative Background:** A dedicated text area for students to tell their "Story" (qualitative data used across all services).
- **AI University Matcher (Admin Tool):**
    - **Logic:** "Agent" scans external databases (e.g., Campus France, Bachelors taught in English).
    - **Workflow:** AI suggests matches -> Counselor reviews & selects -> Counselor applies on student's behalf.
    - **Output:** A "Research Report" for the Admin, not visible to the student initially.
- **Student Jobs Tab:**
    - **Purpose:** For students already in France.
    - **Features:** Listings for internships, part-time work (babysitting), etc.
- **Housing "Tenant Profile":**
    - **Input:** Specific questions (Guarantor, Budget) and Document Uploads (Tax return, ID) directly within the "Find Housing" tab to feed the Landlord AI.
- **Notification System:** Email/Dashboard alerts for profile submission receipt and "Next Steps" from the Alora team.

## 3. Housing Offering Requirements
- **Listing Management:** Interface for Landlords/Agencies to input property metadata: price, square footage, amenities, and proximity to schools.
- **Media:** Image hosting and gallery component for property photos.
- **Verification & Visit Module:**
    - Workflow for booking physical or virtual property visits.
    - Secure storage for "Verification Reports" accessible to students.
- **AI Tenant-Landlord Matching Engine:**
    - **Context:** Optimized for French rental laws (Loi Alur).
    - **Algorithm:** Matches based on document completeness, guarantor strength (Visale vs. Parent), and budget headers.
    - **Output:** A ranked list of candidates for landlords with a "Trust Score."

## 4. Integration (Mentorship) Requirements
- **Family/Student Profiling:** Dedicated profile sections for local families to list interests (e.g., "Culture," "Language Practice").
- **AI Integration Matcher:** 
    - Analyzes student "Interests" (from Intake) and Family "Preferences".
    - Suggests "Cultural Matches" (e.g., Student likes Cooking -> Family owns a restaurant).
- **Contract & Compliance Module:**
    - **Template Engine:** Auto-generates a "Host Family Agreement" or "Mentorship Contract".
    - **Workflow:** Match Agreed -> Contract Generated -> Digital Signature (Student & Family).
    - **Terms:** Clearly stipulates user status (Guest vs Tenant) and programme duration.
- **Matching UI:** A card-based browsing interface for families to view student profiles and vice-versa.
- **Communication Gateway:** A secure, internal messaging system.

## 5. Corporate (Alora Talent) Requirements
- **AI Job/Talent Matcher:**
    - Matches Student "Skills" & "Language Levels" (e.g., English Native + French B2) with Job Requirements.
    - Auto-ranks candidates for Recruiters.
- **Job Board Functionality:**
    - Recruiter dashboard for posting roles.
    - **Language Levels:** Must include ALL levels (A1, A2, B1, B2, C1, C2, Native).
    - SEO-friendly job URLs to increase visibility on external search engines.
- **Candidate Tracking:** "Request Talent Access" feature allowing companies to view a pre-vetted pool of students based on specific skills (e.g., language proficiency).
- **Inquiry Forms:** Lead generation forms for partner inquiries (Company Name, HR Contact, Role Details).

## 6. Security & Compliance
- **Data Protection:** Compliance with GDPR (General Data Protection Regulation) as the platform operates in France/EU.
- **Encryption:** SSL/TLS encryption for all data in transit, particularly for sensitive student identity documents. 

ftdd