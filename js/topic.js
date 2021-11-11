function showtopic(title,message) {
    var main = document.getElementById('topic');
    var topic = document.createElement('div');
    
    topic.onclick = function (event) {
        if (event.target.closest('#back-topic')) {
            main.removeChild(topic);
        }
    };
    topic.classList.add('topic-main', 'mt-5');
    //add code
    topic.innerHTML = `
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8">
                                    <h1 class="mt-4">${title}</h1>
                                    <p style="font-size: 18px;">
                                        by <a href="#">LTP</a>
                                    </p>
                                    <hr>
                                    <div class="content">
                                        ${message}
                                    </div>
                                    <hr>
                                    <a href="#topic-blog" id="back-topic" class="btn" style="margin: 10px;">Back</a>
                                </div>
                            </div>
                        </div>
                    `;
    main.appendChild(topic);    //add child
}
function showtopic1() {
    showtopic(
        title = `How did i build this blog ?`,
        message = `
        <p>Yo, what's up guys it's LTP welcome to my new blog</p>
        <p>This blog created with bootstrap 4 some javascript and jquery</p>
        <p>So today, we are going to talk about how I created this blog. The first thing you need to
            create a blog for is to know how to code, you need to know something about html, css or
            a little bit of javascript, actually, i made this blog with bootstrap 4, html, css, js,
            jquery that's it, i used array for these posts</p>
        <p>this is a bad blog tbh, i created this blog just for fun but if you need a better blog
            you need to know <br><br> front-end: html,css,js <br><br> back-end: php,java,sql</p>
        <p>but !!!, you don't know programming, you don't know what should to do now !!?!?!?!?!?.
        </p><br>
        <p>here some links create the website without coding</p><br><a
            href="https://www.wocode.com/blog">WoCode</a><br><a
            href="https://www.wix.com/">Wix</a><br>
        <p>But I encourage you if you know how to code, then do it yourself, it's a good way to
            practice and improve</p>
        <p>Okay, thanks to reading my post, this is my first post and it's very short</p>
        `
    );
}
function showtopic2() {
    showtopic(
        title = `What is phishing ? How to hack facebook ?`,
        message = `
        <p>Hey guys, i'm LTP, so this is the second post. Today we will talk about how to HACK
            facebook, well this is a really really interesting question. Actually, it's hard to hack a
            facebook account but you can do it. Let's go !</p>
        <h2>What is Phishing?</h2>
        <p>Phishing is a technique that creates a Login page that looks like the real page, when you or
            someone else logs in to that site, you enter marked information. In this article I will show
            you how to create simple fake Facebook login pages. The purpose is not to guide you into
            misleading information, but to show you how people created it, how to identify and prevent a
            phishing website.</p>
        <h2>Create a phishing site like a Facebook page.</h2>
        <p>To do this you need to create the following 3 files:</p>
        <p>1) .html</p>
        <p>2) .php</p>
        <p>3) .txt</p>
        <p>Download 3 files done: <a
                href="https://drive.google.com/file/d/0B7vTnwoYzqRlWDJBdXdUSm1CSjA/view?usp=sharing">Here</a>
        </p>
        <h2>Step 1:</h2>
        <p>Open a website where you want to create a fake login page. Here I use facebook:</p>
        <p>Right click and select view page source (view page source).</p>
        <p>A new tab will appear, you can highlight all the contents in it using ctrl + A and copy &amp;
            paste it into notepad, you can use Notepad ++, Download here.</p>
        <p>Delete the first line
            "DOCTYPE html" and then save this notepad to index.html. (Save that clip, you will
            edit it in the next steps.)
        </p>
        <h2>Step 2:</h2>
        <p>Open the notepad and copy the entire code below and save it as login.php</p>
        <h2>Step 3:</h2>
        <p>Create another notepage file named 'pass.txt' and leave it there.</p>
        <p>At this point, we have 3 files needed.</p>
        <h2>Step 4:</h2>
        <p>Next, you upload 2 files, login.php and pass.txt just created in step 2 and step 3 on a
            certain webhosting. Here I use free hosting is: http://www.byethost.com You must be signing
            to face it. How to register Host how you can refer to <a
                href="http://www.krongnem.com/home/itclub/computertips/byethost">Here</a></p>
        <p>After registering, go to the Online file manager, go to the htdocs directory and choose to
            upload and upload both the newly created login.php and pass.txt files to the host.</p>
        <p>-----&gt; Only pass.txt file you CHMOD it is 777.</p>
        <h2>Step 5:</h2>
        <p>Upload the index.html file you just created in step 1 to Google Drive. (Normally, you upload
            all 3 files to the host is ok, but Currently some hosts are able to identify Phishing and
            Block which accounts to block Phishing, so Google Drive is the best choice to create hosting
            containing Phishing without being blocked from the link. )</p>
        <p>Before uploading you need to edit the index.html file in step 1 as follows:</p>
        <p>- Open the index.html file in Notepad, press Ctrl + F in notepad and find the word 'action',
            after which it has the line: https://www.facebook.com/login.php?login_attempt=1&amp;lwv=110
        </p>
        <p>Please delete all content in 'quotes' and instead 'www.username-yours.byethost ??. com /
            login.php'</p>
        <p>('www.username-your-your.byethost ??. com / login.php' is the domain name containing the
            login.php file of the host you uploaded it above.)</p>
        <p>Next, you go to google drive and create a directory, here I create the directory name as
            host.</p>
        <p>Upload the index.html file to the google drive host directory.</p>
        <p>Save and copy the file path into Notepage or Word, etc</p>
        <p>Example: https://drive.google.com/file/d/0B7vTnwoYzqRlNS12LVZCOVlXZnM/view?usp=sharing</p>
        <p>Copy and Paste it again after https://googledrive.com/host/ into</p>
        <p>https://googledrive.com/host/0B7vTnwoYzqRlNS12LVZCOVlXZnM</p>
        <p>Copy the above address to the address of the browser of Chrome, Coc Coc, Firefox, ... To go
            to Facebook's Fake page. So the page you just created looks like the facebook page.</p>
        <p>Also spreading phishing web links to someone is your way</p>
        `
    );
}
function showtopic3() {
    showtopic(
        title = `5 ways to learn English`,
        message = `
        <p>When it comes to learning English, do you have a habit of reading-copy-repeat to memorize
            new words? This way of learning is actually outdated, both passive and makes you bored
            quickly. There is a saying that 'practice makes perfect' (with iron grinding day, one
            day), but to 'sharpen iron' effectively, you need to learn the right method. Here are 5
            fastest ways to learn English, especially suitable for busy people:</p>
        <h2>Imitate native speakers</h2>
        <p>In the 4 skills Listening - Speaking - Reading - Writing, most learners have difficulty
            with Speaking skills. You can easily find a lot of materials for tinkering with the
            remaining skills, but to practice speaking English successfully, work hard to imitate
            the pronunciation and accent of native speakers.</p>
        <p>Do you often listen to news on news websites such as BBC, CNN, VOA, watch Discovery
            Channel, Cartoon Network, ..., listen to US-UK music or watch British or American TV
            series? Practice listening to English for at least 10 minutes a day and maintaining that
            habit and, at the same time, try to imitate native speakers of a standard accent.</p>
        <h2>Learn vocabulary by topic</h2>
        <p>When grouped into the same topic, memorizing vocabulary is guaranteed to become much
            simpler. This is a particularly good way for office workers because when you learn
            vocabulary in your major, you will maximize your vocabulary, making your conversations
            with colleagues or foreign partners float. flowing and many ideas. To improve your
            English at work, you can start with a number of popular topics such as: writing emails,
            giving presentations, meetings in English, working with foreign bosses, ...</p>
        <h2>Talk a lot</h2>
        <p>You should practice what you learned by speaking English regularly. For example, when
            shopping, try to name the items you want to buy in English, note down words you do not
            know to look up the dictionary and learn more.</p>
        <p>When talking with your boss or foreign colleagues, even if your vocabulary is limited or
            the grammar is not strong, try to express what you mean with simple vocabulary.</p>
        <p>In addition, you can ask a friend who is good at English to edit, comment for you to
            gradually overcome the weaknesses. Allow yourself to be wrong because English is not
            your first language, you have the right to be confident because you have the ability to
            communicate in two different languages.</p>
        <h2>Learn English through short stories</h2>
        <p>You will find lots of interesting English short stories on the Internet with audio to
            help you practice listening. Then, write down what you hear with the simple past tense
            on paper, and then move on to other tenses such as past complete, present, or future.
        </p>
        <p>You can use online tools, or have a friend or native speaker check your spelling and
            grammar. After a short time, ensuring your English grammar will make clear strides.</p>
        <h2>Choose the right English learning environment</h2>
        <p>One of the fastest ways to learn English is to practice in an English speaking
            environment with native speakers. According to English language experts, the environment
            is a very important factor for language learning. That is the reason why people who
            study abroad or settle for a long time abroad communicate in English very fluently and
            naturally.</p>
        <p>When you regularly interact with the standard accent of native speakers, you will
            gradually correct the common mistakes Vietnamese people make when speaking English such
            as omitting the last sound s, sh, ch ..., or intonation lacks up and down, emphasis on
            important keywords.</p>
        <p>To access the ideal English environment, you can join English clubs, or visit reputable
            English centers with flexible class sizes and expert native speakers such as Wall Street
            English.</p>
        <p>The above ways to learn English will hopefully help you find the right method for you.
        </p>
        `
    );
}
function showtopic4() {
    showtopic(
        title = `How to "HACK" NASA ?`,
        message = `
        <h2>This content is empty!!!</h2>
        <h2>Please don't hack any organization!</h2>
        `
    );
}