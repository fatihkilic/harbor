import { Component, OnInit } from '@angular/core';

import { errorHandler } from '../../shared/shared.utils';
import { AlertType, ListMode } from '../../shared/shared.const';
import { MessageHandlerService } from '../../shared/message-handler/message-handler.service';
import { TopRepoService } from './top-repository.service';
import { Repository } from '../repository';

@Component({
    selector: 'top-repo',
    templateUrl: "top-repo.component.html",
    styleUrls: ['top-repo.component.css'],

    providers: [TopRepoService]
})
export class TopRepoComponent implements OnInit{
    private topRepos: Repository[] = [];

    constructor(
        private topRepoService: TopRepoService,
        private messageHandlerService: MessageHandlerService
    ) { }

    public get listMode(): string {
        return ListMode.READONLY;
    }

    //Implement ngOnIni
    ngOnInit(): void {
        this.getTopRepos();
    }

    //Get top popular repositories
    getTopRepos() {
        this.topRepoService.getTopRepos()
            .then(repos => this.topRepos = repos )
            .catch(error => {
                this.messageHandlerService.handleError(error);
            })
    }
}