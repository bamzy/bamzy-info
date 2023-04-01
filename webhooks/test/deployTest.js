

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../deployPagesWebhook');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('/deploy', () => {

    describe('/s3Download API', () => {
        it('go for a non-existing build number', (done) => {
            chai.request(server)
                .post('/s3Download?buildNumber=12')
                .end((err, res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    // res.body.should.be.a('array');
                    // res.body.length.should.be.eql(0);
                    console.log(res.body);
                    done();
                });
        });
    });
    describe('/deploy API', () => {
        it('it should always return 403 because the body signature is wrong', (done) => {
            chai.request(server)
                .post('/deploy')
                .end((err, res) => {
                    res.should.have.status(403);
                    // res.body.should.be.a('array');
                    // res.body.length.should.be.eql(0);
                    console.log(res.body);
                    done();
                });
        });
    });
    describe('/deploy API', () => {
        it('it should return 200 because it has a correct signature', (done) => {
            chai.request(server)
                .post('/deploy').send({
                "ref": "refs/heads/main",
                "before": "59d2a606bce1483ea7dc29a262c40a76393f7a66",
                "after": "e01550df2c500623f39b09e498b34c2f65923108",
                "repository": {
                    "id1": 600160886,
                    "node_id": "R_kgDOI8W6dg",
                    "name": "bamzy-info",
                    "full_name": "bamzy/bamzy-info",
                    "private": false,
                    "owner": {
                        "name": "bamzy",
                        "email": "bamdad.ag@gmail.com",
                        "login": "bamzy",
                        "id": 11267702,
                        "node_id": "MDQ6VXNlcjExMjY3NzAy",
                        "avatar_url": "https://avatars.githubusercontent.com/u/11267702?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/bamzy",
                        "html_url": "https://github.com/bamzy",
                        "followers_url": "https://api.github.com/users/bamzy/followers",
                        "following_url": "https://api.github.com/users/bamzy/following{/other_user}",
                        "gists_url": "https://api.github.com/users/bamzy/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/bamzy/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/bamzy/subscriptions",
                        "organizations_url": "https://api.github.com/users/bamzy/orgs",
                        "repos_url": "https://api.github.com/users/bamzy/repos",
                        "events_url": "https://api.github.com/users/bamzy/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/bamzy/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/bamzy/bamzy-info",
                    "description": "my personal portfolio",
                    "fork": false,
                    "url": "https://github.com/bamzy/bamzy-info",
                    "forks_url": "https://api.github.com/repos/bamzy/bamzy-info/forks",
                    "keys_url": "https://api.github.com/repos/bamzy/bamzy-info/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/bamzy/bamzy-info/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/bamzy/bamzy-info/teams",
                    "hooks_url": "https://api.github.com/repos/bamzy/bamzy-info/hooks",
                    "issue_events_url": "https://api.github.com/repos/bamzy/bamzy-info/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/bamzy/bamzy-info/events",
                    "assignees_url": "https://api.github.com/repos/bamzy/bamzy-info/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/bamzy/bamzy-info/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/bamzy/bamzy-info/tags",
                    "blobs_url": "https://api.github.com/repos/bamzy/bamzy-info/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/bamzy/bamzy-info/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/bamzy/bamzy-info/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/bamzy/bamzy-info/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/bamzy/bamzy-info/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/bamzy/bamzy-info/languages",
                    "stargazers_url": "https://api.github.com/repos/bamzy/bamzy-info/stargazers",
                    "contributors_url": "https://api.github.com/repos/bamzy/bamzy-info/contributors",
                    "subscribers_url": "https://api.github.com/repos/bamzy/bamzy-info/subscribers",
                    "subscription_url": "https://api.github.com/repos/bamzy/bamzy-info/subscription",
                    "commits_url": "https://api.github.com/repos/bamzy/bamzy-info/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/bamzy/bamzy-info/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/bamzy/bamzy-info/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/bamzy/bamzy-info/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/bamzy/bamzy-info/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/bamzy/bamzy-info/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/bamzy/bamzy-info/merges",
                    "archive_url": "https://api.github.com/repos/bamzy/bamzy-info/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/bamzy/bamzy-info/downloads",
                    "issues_url": "https://api.github.com/repos/bamzy/bamzy-info/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/bamzy/bamzy-info/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/bamzy/bamzy-info/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/bamzy/bamzy-info/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/bamzy/bamzy-info/labels{/name}",
                    "releases_url": "https://api.github.com/repos/bamzy/bamzy-info/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/bamzy/bamzy-info/deployments",
                    "created_at": 1676052647,
                    "updated_at": "2023-03-27T16:13:26Z",
                    "pushed_at": 1680299126,
                    "git_url": "git://github.com/bamzy/bamzy-info.git",
                    "ssh_url": "git@github.com:bamzy/bamzy-info.git",
                    "clone_url": "https://github.com/bamzy/bamzy-info.git",
                    "svn_url": "https://github.com/bamzy/bamzy-info",
                    "homepage": null,
                    "size": 26994,
                    "stargazers_count": 0,
                    "watchers_count": 0,
                    "language": "JavaScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "has_discussions": false,
                    "forks_count": 0,
                    "mirror_url": null,
                    "archived": false,
                    "disabled": false,
                    "open_issues_count": 0,
                    "license": null,
                    "allow_forking": true,
                    "is_template": false,
                    "web_commit_signoff_required": false,
                    "topics": [

                    ],
                    "visibility": "public",
                    "forks": 0,
                    "open_issues": 0,
                    "watchers": 0,
                    "default_branch": "main",
                    "stargazers": 0,
                    "master_branch": "main"
                },
                "pusher": {
                    "name": "bamzy",
                    "email": "bamdad.ag@gmail.com"
                },
                "sender": {
                    "login": "bamzy",
                    "id": 11267702,
                    "node_id": "MDQ6VXNlcjExMjY3NzAy",
                    "avatar_url": "https://avatars.githubusercontent.com/u/11267702?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bamzy",
                    "html_url": "https://github.com/bamzy",
                    "followers_url": "https://api.github.com/users/bamzy/followers",
                    "following_url": "https://api.github.com/users/bamzy/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bamzy/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bamzy/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bamzy/subscriptions",
                    "organizations_url": "https://api.github.com/users/bamzy/orgs",
                    "repos_url": "https://api.github.com/users/bamzy/repos",
                    "events_url": "https://api.github.com/users/bamzy/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bamzy/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "created": false,
                "deleted": false,
                "forced": false,
                "base_ref": null,
                "compare": "https://github.com/bamzy/bamzy-info/compare/59d2a606bce1...e01550df2c50",
                "commits": [
                    {
                        "id": "e01550df2c500623f39b09e498b34c2f65923108",
                        "tree_id": "56b878afa86f9b216c36d14c80475692d87283f8",
                        "distinct": true,
                        "message": "let's get colorfull",
                        "timestamp": "2023-03-31T17:45:21-04:00",
                        "url": "https://github.com/bamzy/bamzy-info/commit/e01550df2c500623f39b09e498b34c2f65923108",
                        "author": {
                            "name": "Bamdad",
                            "email": "bamdad@mortgageautomator.com"
                        },
                        "committer": {
                            "name": "Bamdad",
                            "email": "bamdad@mortgageautomator.com"
                        },
                        "added": [

                        ],
                        "removed": [

                        ],
                        "modified": [
                            "Jenkinsfile"
                        ]
                    }
                ],
                "head_commit": {
                    "id": "e01550df2c500623f39b09e498b34c2f65923108",
                    "tree_id": "56b878afa86f9b216c36d14c80475692d87283f8",
                    "distinct": true,
                    "message": "let's get colorfull",
                    "timestamp": "2023-03-31T17:45:21-04:00",
                    "url": "https://github.com/bamzy/bamzy-info/commit/e01550df2c500623f39b09e498b34c2f65923108",
                    "author": {
                        "name": "Bamdad",
                        "email": "bamdad@mortgageautomator.com"
                    },
                    "committer": {
                        "name": "Bamdad",
                        "email": "bamdad@mortgageautomator.com"
                    },
                    "added": [

                    ],
                    "removed1": [

                    ],
                    "modified": [
                        "Jenkinsfile"
                    ]
                }
            }).set('X-Hub-Signature', 'sha1=434c54f616c5cb59719cc938ef9a9c6bcaa4d19a')
                .set('content-type', 'application/json')
                .end((err, res) => {
                    res.should.have.status(200);
                    console.log(res.status + "|" +res.body);
                    done();
                });
        });
    });

});