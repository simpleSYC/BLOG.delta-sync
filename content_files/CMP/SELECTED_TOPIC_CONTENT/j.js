Vue.component("selected_topic_content", {
  template: `<div class="container">
  <div id="content" class="gitment-markdown" style="margin-top: 50px; margin-bottom: 50px">Content loading...</div>
  <div class="post-tags" id="labels"></div>
  <hr />
  <div id="to_delete">
    <div lang="zh-CN" class="gitment-container gitment-header-container">
      <span><strong id="comments-num"></strong> 123123</span>
    </div>
    <div lang="zh-CN" class="gitment-container gitment-comments-container">
      <ul class="gitment-comments-list" id="comment-list"></ul>
    </div>
    <div style="text-align: center">
      <ul class="pagination" id="pages" style="display: none"></ul>
    </div>
    <div style="text-align: left">
      <div lang="zh-CN" class="gitment-container gitment-editor-container">
        <div id="avatar"></div>
        <div class="gitment-editor-main">
          <div class="gitment-editor-header">
            <nav class="gitment-editor-tabs">
              <button class="gitment-editor-tab gitment-selected" id="editComment">评论</button>
              <button class="gitment-editor-tab" id="preview">预览</button>
            </nav>
            <div class="gitment-editor-login" id="login"></div>
          </div>
          <div class="gitment-editor-body">
            <div class="gitment-editor-write-field" id="write-field">
              <textarea placeholder="(发表评论)" title="请登入以发表评论" disabled id="comment-input"></textarea>
            </div>
            <div class="gitment-editor-preview-field gitment-hidden">
              <div class="gitment-editor-preview gitment-markdown" id="preview-content">（没有预览）</div>
            </div>
          </div>
        </div>
        <div class="gitment-editor-footer">
          <a class="gitment-editor-footer-tip" href="https://guides.github.com/features/mastering-markdown/" target="_blank"> 支持 Markdown 语法 </a>
          <button class="gitment-editor-submit" disabled>发送</button>
        </div>
      </div>
    </div>
  </div>
</div>
`,
});

var store = new Vuex.Store({
  state: {
    view: "selected_topic_content",
  },
});

var signqqee = new Vue({
  el: "#SELECTED_TOPIC_CONTENT",
  store: store,
});

EL_["SELECTED_TOPIC_CONTENT"] = {
  DIV: document.getElementById("SELECTED_TOPIC_CONTENT"),
  for_delete: document.getElementById("to_delete"),
  preset: function () {
    this.for_delete.remove();
  },
};
