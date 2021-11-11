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
                                <div class="col-lg-10">
                                    <h1 style="font-size: 45px;">${title}</h1>
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
        <h2>Hôm nay mình sẽ hướng dẫn các bạn cách làm một blog</h2>
        <p>Khi mới xuất hiện, Blog nhanh chóng trở thành một từ phổ biến và có một điều chắc chắn: Internet giống như một bục diễn thuyết và hàng triệu người sẵn sàng xây dựng tiếng nói của mình qua blog – một từ rút gọn của "web log".</p>
        <p>Xây dựng một trang self-hosted blog (hay còn gọi là stand alone blog). Đây là loại blog tự host, khái niệm này được phân biệt với hosted blog là các dịch vụ blog miễn phí trên mạng. Điều này có nghĩa là mua một địa chỉ web (hay còn gọi là domain name), mua tên miền, trả phí để lưu trữ trên web và sau đó là tự mình xây dựng trang blog riêng.</p>
        <h2>Trước khi bắt đầu</h2>
        <p>Có 2 điều cần phải thực hiện trước khi xây dựng self-hosted blog. Đầu tiên là đăng ký domain name và thứ 2 là sắp xếp host: hiệu quả nhất là sử dụng không gian lưu trữ trên một server, server này sẽ kết nối với web để trang blog luôn truy cập được.</p>
        <p>Mặc dù không phải là bắt buộc nhưng sẽ tốt hơn là mua cả 2 yêu cầu trên từ cùng một công ty. Bên cạnh đó, có rất nhiều hãng host web bao gồm web domain trong gói host. Hiện nay, có rất nhiều công ty cung cấp dịch vụ host và đăng ký domain name nhưng không có cách nào để phân biệt giữa các nhà cung cấp. Mặc dù vậy, có một vài điều bạn nên xem qua trước khi ký hợp đồng với họ.</p>
        <p>Bên cạnh đó, hãy tìm lựa chọn ẩn địa chỉ portal (địa chỉ bưu chính) khỏi bị lộ khi đăng kí. Ngoài ra, hãy nhớ đánh dấu vào lịch để không quên thời gian hết hạn. Công ty bạn đăng ký miền với họ (hay còn gọi là registrar) sẽ gửi một thông báo nhắc nhở. Dẫu vậy, quên ngày hết hạn có thể gây ra nhiều phức tạp, thậm chí còn khiến bạn mất mãi mãi tên miền của mình.</p>
        <p>Website hosting – thuê không gian lưu trữ trên một server internet sẽ lưu trữ trang blog của bạn – là nơi phức tạp hơn đôi chút. Điều này là do có rất nhiều lựa chọn khác nhau.</p>
        <h2>Lựa chọn host</h2>
        <p>Khi nói về việc chọn một host cho trang WordPress blog, thực chất chỉ có 2 yêu cầu – hỗ trợ cho PHP 5.2.4 và MySQL and 5.0.15.</p>
        <p>Người dùng không cần phải nghĩ xem nó là cái gì mà chỉ cần biết rằng nó sẽ cho phép các bài viết của bạn được đăng tải bằng cách sử dụng đường link thân thiện hơn, ví dụ là www.yourwebdomain.co.uk/events thay vì www.yourwebdomain.co.uk/?p=69.</p>
        <h2>Blog dễ dàng hơn</h2>
        <p>Cũng là một lựa chọn phổ biến (ở trang www.wordpress.com chứ không phải www.wordpress.org). Google cũng góp mặt trong “cuộc chơi” này với Blogger (sắp đổi tên thành Google Blogs): nếu có tài khoản Google (bao gồm cả Gmail), bạn có thể sử dụng trang blog này ngay lập tức</p>
        <h2>Nhận phần mềm</h2>
        <p>Trước tiên, bạn sẽ cần một cách nào đó để đăng tải các file lên server. Điều này có thể thực hiện bằng cách sử dụng một số công cụ như File Transfer Protocol, hoặc FTP. Một số hỗ trợ FTP cơ bản đã được tích hợp sẵn trong Windows nhưng chúng tôi vẫn khuyến cáo người dùng download một trong những công cụ FTP riêng miễn phí đang có trên thị trường. Nó sẽ giúp công việc này dễ dàng hơn nhiều. Công cụ được yêu thích khá nhiều là Filezilla.</p>
        <p>Windows cũng có Notepad, là công cụ chỉnh sửa văn bản cơ bản, nhưng chúng tôi khuyến cáo người dùng cài đặt Notepad++. Đây là công cụ miễn phí, sử dụng màu để giúp việc chỉnh sửa dễ dàng hơn. Tất nhiên, điều chắc chắn bạn cần WordPress.</p>
        <p>Khi hoàn thành, phải chuột vào file mới download và chọn Extract hoặc Extract All để chạy wizard giải nén. Kích Next → Browse → Desktop → OK → Next. Kích vào để loại bỏ dấu tích ở hộp thoại “Show extracted files” rồi kích Finish.</p>
        <h2>Tạo một cơ sở dữ liệu</h2>
        <p>Để thực hiện, chạy Notepad++ và kích vào File → Open. Điều hướng tới folder WordPress trên Windows Desktop và kích đúp vào file có tên “wp-config-sample.php”. Notepad++ sẽ hiển thị số dòng ở bên tay trái của cửa sổ. Nếu chúng không hiển thị, kích vào Settings → Preferences. Chọn thẻ Editing và đặt dấu tích vào hộp thoại “Display line number”. Sau đó, kích Close. Tiếp đến, cuộn chuột xuống wp-config-sample.php để tìm cài đặt MySQL – nó sẽ nằm ở dòng 19.</p>
        <p>Bạn sẽ thấy nơi điền chữ cho tên cơ sở dữ liệu, tên người dùng (dòng 22) và mật khẩu (dòng 25, lần lượt là “database_name_here”, “username_here” và “password_here”. Người dùng chỉ việc thay thế chúng bằng thông tin chi tiết cá nhân, nhưng nhớ giữ dấu ngoặc kép.</p>
        <p>Chú ý rằng entry MySQL hostname (dòng 28) thường được để là “localhost” – nhưng hãy nhớ kiểm tra lại web host xem có gì khác biệt hay không.</p>
        <p>Còn một mục khác cũng cần phải thay đổi, giữa dòng 45 và 52. Mục này được sử dụng để giúp bảo vệ WordPress khỏi hacker và yêu cầu nhập chuỗi code 8 ký tự độc đáo. Thực tế, chúng được tạo tự động bởi WordPress và nếu nhìn vào dòng 40 trong file wp-config-sample.php, bạn sẽ thấy một đường link để tạo code.</p>
        <p>Code được tạo tự động mỗi lần địa chỉ được ghé thăm, vậy nên hãy nhớ rằng bạn đã đặt chúng thật độc đáo và an toàn khi sử dụng. Copy và paste văn bản từ trang web vào Notepad++ để thay thế những dòng này.</p>
        <p>Sau khi đã thực hiện các thay đổi trên, kích vào menu File và chọn Save As. Chỉnh sửa tên file thành “wp-config” (xóa đoạn “-sample”) và kích Save. Folder WordPress giờ đây đã sẵn sàng để đăng tải bài viết.</p>
        <h2>Trên đây là demo các bước thực hiện</h2>
        <p>xem thêm <a href="https://www.crf-blogger.gq/huong-dan-tao-mot-blogger-nhu-toi-da-lam/" target="_blank">chi tiết</a> cách thực hiện</p>
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
        <p>Download 3 files: <a href="https://drive.google.com/file/d/0B7vTnwoYzqRlWDJBdXdUSm1CSjA/view?usp=sharing">Here</a>
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
